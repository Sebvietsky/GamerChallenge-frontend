import type {
  Challenge,
  Participation,
  queryParams,
} from "@/features/types/challenge.type";
import { API_BASE_URL } from "@/lib/api";
import { includes } from "zod/v4-mini";

interface PaginatedResponse {
  data: Challenge[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

type HomeSortBy = "votes" | "createdAt" | "participations";

async function getErrorMessage(response: Response): Promise<string> {
  const contentType = response.headers.get("content-type");
  if (contentType?.includes("application/json")) {
    try {
      const error = await response.json();
      return error?.message ?? messageFromStatus(response.status);
    } catch {
      return messageFromStatus(response.status);
    }
  }
  return messageFromStatus(response.status);
}

export async function getHomeChallenges({
  sortBy = "votes",
  since = undefined,
  limit = 3,
}: queryParams): Promise<Challenge[]> {
  const params = new URLSearchParams({
    orderBy,
    limit: String(limit),
  });
  if (since) {
    params.set("since", since);
  }

  const response = await fetch(`${API_BASE_URL}/challenges/home?${params}`, {
    credentials: "include",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Impossible de récupérer les challenges de la home");
  }

  const json: PaginatedResponse = await response.json();

  return json.data;
}

export async function getChallenges({
  page = 1,
  limit = 20,
  orderBy = "votes",
  sort = "desc",
  since = undefined,
}: queryParams): Promise<Challenge[]> {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
    orderBy,
    sort,
  });
  if (since) {
    params.set("since", since);
  }

  if(since) params.set("since", since);

  const response = await fetch(`${API_BASE_URL}/challenges?${params}`, {
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
  const response = await fetch(`${API_BASE_URL}/challenges/${slug}`, {
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
  slug: string,
): Promise<Participation[] | null> {
  const response = await fetch(
    `${API_BASE_URL}/challenges/${slug}/participations`,
    {
      credentials: "include",
      cache: "no-store",
    },
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Impossible de récupérer les participations");
  }

  const json: { data: Participation[]; page: number; total: number } =
    await response.json();
  return json.data;
}

const createToggleService = (endpoint: "likes" | "favorites") => ({
  add: async (slug: string): Promise<void> => {
    await fetch(`${API_BASE_URL}/challenges/${slug}/${endpoint}`, {
      method: "POST",
      credentials: "include",
      cache: "no-cache",
    });
  },
  remove: async (slug: string): Promise<void> => {
    await fetch(`${API_BASE_URL}/challenges/${slug}/${endpoint}`, {
      method: "DELETE",
      credentials: "include",
      cache: "no-cache",
    });
  },
});

export const likeToggle = createToggleService("likes");
export const favoriteToggle = createToggleService("favorites");

export async function createChallenge () {
  
  const formData = new FormData();
  // TODO Ajouter form fields
  const json = JSON.stringify(Object.fromEntries(formData.entries()));
  
  const response = await fetch(`${API_BASE_URL}/challenges`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    cache: "no-cache",
    body: json

  })

  if(!response.ok) throw new Error(await getErrorMessage(response))

    return response.json()
}

function messageFromStatus(status: number): string {
  switch (status) {
    case 400:
      return "Données invalides";
    case 500:
      return "Erreur serveur, réessayez plus tard";
    default:
      return "Une erreur est survenue";
  }
}