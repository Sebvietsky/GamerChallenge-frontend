import { API_BASE_URL } from "@/lib/api";

import type { Participation } from "@/features/types/challenge.type";

export async function getParticipationsBySlug(slug: string): Promise<Participation | null> {

  const response = await fetch(`${API_BASE_URL}/participations/${slug}`, {
    credentials: "include",
    cache: "no-store"
  })
  if(response.status === 404) return null
  if(!response.ok) throw new Error("Impossible de récupérer la participation")
  
  const data: Participation = await response.json()
  return data;
}