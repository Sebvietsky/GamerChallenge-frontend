"use client"

import React, { createContext, useState, useEffect, ReactNode } from "react";
import { User } from "@/features/auth/types/auth.type";
import "dotenv/config";

const API_URL = process.env.API_URL;

type AuthContextType = {
  user: User | null
  isAuthenticated: boolean
  login: (user: User) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
})

export function AuthProvider({ children }: { children: ReactNode }){
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    fetch(`${API_URL}/auth/me`, {
      credentials: "include",
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((me) => me && setUser(me))
      .catch(() => setUser(null))
  }, [])

  function login(user: User) {
    setUser(user)
  }

  async function logout() {
    await fetch(`${API_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    })
    setUser(null)
  }

  return React.createElement (
    AuthContext.Provider,
    { value: { user, isAuthenticated: !!user, login, logout}},
    children
  )
}
