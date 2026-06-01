"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import { User } from "@/features/auth/types/auth.type";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }): React.ReactElement{
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    fetch(`${API_URL}/auth/refresh`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((me) => me && setUser(me))
      .catch(() => setUser(null));
  }, []);

  function login(user: User) {
    setUser(user);
  }

  async function logout() {
    await fetch(`${API_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
