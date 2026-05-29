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
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Ici redirige vers /login si n'est pas connecter
    if(!isAuthenticated) {
      router.push("/login")

    if (requiredRole && user?.role !== requiredRole) {
      router.push("/unauthorized")
    }
    }}, [isAuthenticated, user, router]
  )

  if(!isAuthenticated) return null
  if (requiredRole && user?.role !== requiredRole) return null

  return <>{children}</>
}