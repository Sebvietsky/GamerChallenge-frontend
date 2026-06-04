"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import { User } from "@/features/types/auth.type";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  isLoggingOut: boolean;
  login: (user: User) => void;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  loading: true,
  isLoggingOut: false,
  login: () => {},
  logout: async () => {},
});

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/auth/me`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((me) => me && setUser(me.userWithoutPassword ?? me))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  function login(user: User) {
    setUser(user);
  }

  async function logout() {
    setIsLoggingOut(true);
    try {
      await fetch(`${API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      throw error;
    } finally {
      setUser(null);
      setIsLoggingOut(false);
      if (typeof window !== "undefined" && window.location.pathname !== "/") {
        window.location.replace("/");
      }
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        isLoggingOut,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
