import { API_BASE_URL } from "@/lib/api";

export async function getDifficulties() {
  const response = await fetch(`${API_BASE_URL}/difficulties`, {
    credentials: "include",
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Impossible de récupérer les difficultés...");
  }

  const data = await response.json();

  return data;
}
