import { API_BASE_URL, fetchWithAuth } from "@/lib/api";
import { getErrorMessage } from "@/features/api/challenge.api";
import { CreateParticipationPayload } from "../types/createSchema";

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


export async function createParticipation(
  challengeSlug: string,
  payload: CreateParticipationPayload,
) {
  const response = await fetchWithAuth(
    `${API_BASE_URL}/challenges/${challengeSlug}/participations`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(payload),
    },
  );

  if (!response.ok) throw new Error(await getErrorMessage(response));

  return response.json();
}

export async function editParticipation(
  slug: string,
  payload: CreateParticipationPayload
) {
  const response = await fetchWithAuth(`${API_BASE_URL}/participations/${slug}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    body: JSON.stringify(payload)
  })

  if(!response.ok) throw new Error(await getErrorMessage(response))

  return response.json();
}

export async function deleteParticiaption(slug: string){
  const response = await fetchWithAuth(`${API_BASE_URL}/participations/${slug}`, {
    method: "DELETE",
  })

  if(!response.ok) throw new Error("Impossible de supprimer la participation")
}

export async function voteParticipation(slug: string): Promise<void> {
  const response = await fetchWithAuth(`${API_BASE_URL}/participations/${slug}/vote`, {
    method: "POST",
  })

  if (response.status === 409) throw new Error("ALREADY_VOTED")
  if (response.status === 401) throw new Error("UNAUTHORIZED")
  if (!response.ok) throw new Error("Impossible de voter")
}

export async function unvoteParticipation(slug: string): Promise<void> {
  const response = await fetchWithAuth(`${API_BASE_URL}/participations/${slug}/vote`, {
    method: "DELETE",
  })

  if (response.status === 401) throw new Error("UNAUTHORIZED")
  if (!response.ok) throw new Error("Impossible de retirer le vote")
}