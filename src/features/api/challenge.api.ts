import type { Challenge, Participation, queryParams } from "@/features/types/challenge.type";
import { API_SERVER_URL } from "@/lib/api";

interface PaginatedResponse {
  data: Challenge[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export async function getChallenges({ page=1, limit = 20, orderBy = "votes", sort = "desc", since= undefined}: queryParams): Promise<Challenge[]> {
    const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
    orderBy,
    sort,
  });
  
  const response = await fetch(`${API_SERVER_URL}/challenges?${params}`, {
    credentials: "include",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Impossible de récupérer les challenges");
  }

  const json: PaginatedResponse = await response.json();
  return json.data;
}

export async function getChallengeBySlug(
  slug: string,
): Promise<Challenge | null> {
  const response = await fetch(`${API_SERVER_URL}/challenges/${slug}`, {
    credentials: "include",
    cache: "no-store",
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Impossible de récupérer le challenge");
  }

  const dataSlug: Challenge = await response.json();
  return dataSlug;
}

export async function getParticipationsByChallenge(
  slug: string
): Promise<Participation[] | null>{
  
  const response = await fetch(`${API_SERVER_URL}/challenges/${slug}/participations`, {
    credentials: "include",
    cache: "no-store",
  });

  if(response.status === 404) {
    return null
  }

  if(!response.ok) {
    throw new Error("Impossible de récupérer les participations")
  }

  const json: { data: Participation[], page: number, total: number} = await response.json()
  return json.data
}
