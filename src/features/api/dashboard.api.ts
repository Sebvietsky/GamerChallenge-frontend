import { API_BASE_URL, fetchWithAuth } from "@/lib/api";

import { queryParams } from "../types/dashboard.type";
import { Challenge } from "../types/challenge.type";
import { DashboardResponse } from "@/features/types/dashboard.type";

export async function getInformationDashboard(): Promise<DashboardResponse> {
  const response = await fetchWithAuth(`${API_BASE_URL}/user/dashboard`, {
    method: "GET",
    cache: "no-cache",
  });

  if (!response.ok)
    throw new Error("Impossible de récupérer les informations d'utilisateur");

  return response.json();
}

interface PaginatedResponse {
  data: Challenge[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export async function getFavoriteChallenges({
  page = 1,
  limit = 20,
}: queryParams) {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  console.log(API_BASE_URL);
  const response = await fetch(`${API_BASE_URL}/user/getFavorites?${params}`, {
    credentials: "include",
    cache: "no-store",
  });

  console.log(response);

  if (!response.ok) {
    throw new Error("Impossible de récupérer les challenges");
  }

  const json: PaginatedResponse = await response.json();

  console.log(json);
  return json.data;
}
