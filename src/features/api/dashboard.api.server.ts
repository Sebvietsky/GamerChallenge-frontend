import { API_BASE_URL } from "@/lib/api";
import { getServerAuthHeaders } from "@/lib/api.server";

export async function getInformationDashboardServer() {
  const headers = await getServerAuthHeaders();

  const response = await fetch(`${API_BASE_URL}/user/dashboard`, {
    method: "GET",
    headers,
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Impossible de récupérer le dashboard");
  }

  return response.json();
}
