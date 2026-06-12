import { User } from "../types/auth.type";
import { getServerAuthHeaders } from "@/lib/api.server";
import { API_BASE_URL } from "@/lib/api";

export async function getMe(): Promise<User | null> {
  try {
    const headers = await getServerAuthHeaders();
    const response = await fetch(`${API_BASE_URL}/auth/me`, {
      method: "GET",
      headers,
    })
    if (!response.ok) return null
    
    return response.json()
  } catch {
    return null
  }
}