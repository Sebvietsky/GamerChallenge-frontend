import { AuthResponse, User } from "../types/auth.type";
import { getServerAuthHeaders } from "@/lib/api.server";
import { API_BASE_URL } from "@/lib/api";

export async function getMe(): Promise<User> {
  const headers = await getServerAuthHeaders();
  const response = await fetch(`${API_BASE_URL}/auth/me`, {
    method: "GET",
    headers,
  })

  if (!response.ok) throw new Error("Non authentifié")
  return response.json()
}