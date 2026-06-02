"use client"

import { useState } from "react"
import { loginUser } from "@/features/auth/api/auth.api"
import { useAuth } from "@/features/auth/hooks/useAuth"
import { useRouter } from "next/navigation";

export function useLogin() {
  const { login: loginContext } = useAuth();
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter();

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>){
    e.preventDefault()
    setError(null)
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const email = formData.get("email")?.toString().trim() as string;
    const password = formData.get("password")?.toString() as string;

    const payload = {email, password}

    if(!email || !password) {
      setError("Veuillez remplir tous les champs")
      setLoading(false)
      return
    }

    if(!email.includes("@")) {
      setError("Email invalide")
      setLoading(false)
      return
    }

    try {
      const user = await loginUser(payload)
      loginContext(user)
      router.push("/")
    } catch (err) {
      const message = err instanceof Error ? err.message : "Erreur inconnue"
      setError(message)
      console.log(message)
    } finally {
      setLoading(false)
    }
  }

  return { handleSubmit, error, loading }
}