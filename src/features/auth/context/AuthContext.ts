"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import { User, LoginPayload } from "@/features/auth/types/auth.type";
import { loginUser, logoutUser } from "@/features/auth/api/auth.api";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (payload: LoginPayload) => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => {},
  logout: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/auth/me`, {
      credentials: "include",
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((me) => me && setUser(me))
      .catch(() => setUser(null));
  }, []);

  async function login(payload: LoginPayload) {
    const { user } = await loginUser(payload);
    setUser(user);
  }

  async function logout() {
    try {
      await logoutUser();
    } finally {
      setUser(null);
    }
  }

  return React.createElement(
    AuthContext.Provider,
    { value: { user, isAuthenticated: !!user, login, logout } },
    children,
  );
}
