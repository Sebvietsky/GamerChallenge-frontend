import { API_BASE_URL, fetchWithAuth } from "@/lib/api";
import { getServerAuthHeaders } from "@/lib/api.server";

export async function getInformationDashboard() {
  const headers = await getServerAuthHeaders();
  const response = await fetchWithAuth(`${API_BASE_URL}/user/dashboard`, {
    method: "GET",
    headers,
    cache: "no-cache"
  })

  if(!response.ok) throw new Error("Impossible de récupere les informations utilisateur")

  const data = await response.json()
  return data
}


