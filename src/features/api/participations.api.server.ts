import { API_BASE_URL } from "@/lib/api";
import { getServerAuthHeaders } from "@/lib/api.server";
import type { LikedAndFavoriteChallenge } from "../types/challenge.type";

export async function isLikedParticipation(): Promise<LikedAndFavoriteChallenge[]>{
  const headers = await getServerAuthHeaders();
  const response = await fetch(`${API_BASE_URL}/user/isLikedParticipation`, {
    headers,
    cache: "no-store"
  })

  if (!response.ok) return []

  return response.json()
}
