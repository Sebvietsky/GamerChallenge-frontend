import { API_BASE_URL, fetchWithAuth } from "@/lib/api";

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
