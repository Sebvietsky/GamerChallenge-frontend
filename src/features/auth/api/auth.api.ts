import "dotenv/config";

const API_URL = process.env.API_URL

export async function login(email: string, password: string) {
  //TODO A verifier route pour login
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })

  if (!response.ok) {
    
    const contentType = response.headers.get("content-type")

    if (contentType?.includes("application/json")) {
      const error = await response.json()
      throw new Error(error.message ?? "Erreur de connexion")
    }

    throw new Error(`Erreur ${response.status} : ${response.statusText}`)
  }

  return response.json()
}