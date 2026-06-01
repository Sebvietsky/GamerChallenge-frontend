"use client"

import { useAuth } from "@/features/auth/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode,
  requiredRole?: "admin" | "user" | "moderator"
}

export function ProtectedRoute({children, requiredRole}: Props) {
  const { isAuthenticated, user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return

    if (!isAuthenticated) {
      router.push("/login")
      return
    }

    if (requiredRole && user?.role !== requiredRole) {
      router.push("/unauthorized")
    }
  }, [isAuthenticated, user, loading, router, requiredRole])

  if (loading) return null
  if (!isAuthenticated) return null
  if (requiredRole && user?.role !== requiredRole) return null

  return <>{children}</>
}