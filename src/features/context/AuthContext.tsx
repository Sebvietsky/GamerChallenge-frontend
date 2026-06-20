"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import { User } from "@/features/types/auth.type";
import { fetchWithAuth, setSessionExpiredHandler, API_URL } from "@/lib/api";

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
    // Enregistre le handler au montage de l'app, avant tout appel réseau.
    // Garantit que fetchWithAuth peut déclencher la déconnexion à tout moment.
    setSessionExpiredHandler(() => setUser(null));

    const hasAuthHint = document.cookie
      .split("; ")
      .some((c) => c.startsWith("isAuthenticated="));

    // fetchWithAuth gère le refresh silencieux si l'access token est expiré.
    async function checkAuth() {
      try {
        if (!hasAuthHint) {
          return;
        }
        const res = await fetchWithAuth(`${API_URL}/auth/me`);
        if (res.ok) setUser(await res.json());
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    checkAuth();
  }, []);

  function login(user: User) {
    setUser(user);
  }

  async function logout() {
    setIsLoggingOut(true);
    try {
      await fetchWithAuth(`${API_URL}/auth/logout`, {
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
