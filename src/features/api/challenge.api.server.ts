// Fichier séparé de challenge.api.ts intentionnellement : ces fonctions utilisent
// getServerAuthHeaders (next/headers), une API server-only. Les regrouper ici évite
// que challenge.api.ts tire next/headers dans le bundle client via ses imports dans
// des hooks/composants "use client".
import { API_BASE_URL, fetchWithAuth } from "@/lib/api";
import { getServerAuthHeaders } from "@/lib/api.server";
import type { LikedAndFavoriteChallenge } from "@/features/types/challenge.type";

// Récupère la liste des slugs de challenges likés par l'utilisateur connecté.
// Appelée depuis un Server Component : les cookies sont forwarded manuellement
// via getServerAuthHeaders() car credentials: "include" est ignoré côté serveur.
// Retourne [] si l'utilisateur n'est pas connecté (401) ou en cas d'erreur,
// pour ne pas bloquer l'affichage de la page.
export async function getUserLikedOnChallenge(): Promise<
  LikedAndFavoriteChallenge[]
> {
  const headers = await getServerAuthHeaders();

  const res = await fetchWithAuth(`${API_BASE_URL}/user/isLikedChallenge`, {
    headers,
    cache: "no-store",
  });

  if (!res.ok) {
    return [];
  }
  return await res.json();
}

export async function getUserFavoritedOnChallenge(): Promise<
  LikedAndFavoriteChallenge[]
> {
  const headers = await getServerAuthHeaders();

  const res = await fetchWithAuth(`${API_BASE_URL}/user/isFavorite`, {
    headers,
    cache: "no-store",
  });

  if (!res.ok) {
    return [];
  }
  return await res.json();
}
