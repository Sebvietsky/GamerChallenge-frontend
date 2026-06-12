import { User } from "../types/auth.type";
import { getServerAuthHeaders } from "@/lib/api.server";
import { API_BASE_URL } from "@/lib/api";

export async function getMe(): Promise<User | null> {
  try {
    const headers = await getServerAuthHeaders();
    console.log("cookies envoyés:", headers)
    const response = await fetch(`${API_BASE_URL}/auth/me`, {
      method: "GET",
      headers,
    })
    console.log("status getMe:", response.status)
    if (!response.ok) return null
    
    console.log("Fin de getME")
    return response.json()
  } catch {
    return null
  }
}