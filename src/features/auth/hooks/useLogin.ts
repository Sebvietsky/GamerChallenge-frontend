"use client"

import { useState } from "react"
import { login } from "@/features/auth/api/auth.api"

export function useLogin() {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>){
    e.preventDefault()
    setError(null)
    setLoading(true)

    const formData = new FormData(e.currentTarget)

    try {
      const data = await login(
        formData.get("email") as string,
        formData.get("password") as string
      )
      return data
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