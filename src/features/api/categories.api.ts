import { API_BASE_URL } from "@/lib/api";

export async function getCategories() {
  const response = await fetch(`${API_BASE_URL}/categories`, {
    credentials: "include",
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Impossible de récupérer les catégories...");
  }

  const data = await response.json();

  return data;
}
