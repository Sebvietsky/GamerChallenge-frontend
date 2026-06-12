"use client";

import { useEffect, useRef, useState } from "react";

import { getFavoriteChallenges } from "@/features/api/dashboard.api";
import { type ChallengeItem } from "@/features/types/challenge.type";
import { CHALLENGES_DEFAULT_PAGE, CHALLENGES_PER_PAGE } from "@/lib/constants";

type ChallengesListState = {
  page: number;
};

// État de la liste à restaurer quand l'utilisateur revient d'une page détail
// (présence de "scroll-restore" posé par ChallengeCard au clic).
function readRestoredListState(): ChallengesListState | null {
  if (typeof window === "undefined") return null;
  try {
    const restore = sessionStorage.getItem("scroll-restore");
    const state = sessionStorage.getItem("challenges-list-state");
    if (!restore || !state) return null;
    const { from } = JSON.parse(restore);
    if (from !== window.location.pathname) return null;
    const parsed: ChallengesListState = JSON.parse(state);
    // La recherche est réinitialisée au remount : une position sauvegardée
    // sur une liste filtrée n'aurait plus de sens.
    return parsed;
  } catch {
    return null;
  }
}

export function useFavoriteChallenges() {
  const [restoredState] = useState(readRestoredListState);
  const [favoriteChallenges, setFavoriteChallenges] = useState<ChallengeItem[]>(
    [],
  );
  const [loading, setLoading] = useState(true);
  const [hasMoreData, setHasMoreData] = useState(true);
  const isFetchingMore = useRef(false);
  const restoredPage = useRef(restoredState?.page ?? null);
  const [page, setPage] = useState(
    restoredState?.page ?? CHALLENGES_DEFAULT_PAGE,
  );

  // Fetch initial.
  // Au retour d'une page détail, recharge en un seul appel toutes les pages
  // déjà vues pour que la restauration du scroll retrouve la même hauteur.
  useEffect(() => {
    async function fetchChallenges() {
      setLoading(true);
      setHasMoreData(true);
      const pagesToLoad = restoredPage.current ?? CHALLENGES_DEFAULT_PAGE;
      const limit = pagesToLoad * CHALLENGES_PER_PAGE;
      setPage(pagesToLoad);
      try {
        const data = await getFavoriteChallenges({
          page: CHALLENGES_DEFAULT_PAGE,
          limit,
        });
        setFavoriteChallenges(data);
        if (data.length <= limit) setHasMoreData(false);
      } finally {
        restoredPage.current = null;
        setLoading(false);
      }
    }
    fetchChallenges();
  }, []);

  // Persiste l'état courant de la liste pour pouvoir le restaurer au retour
  useEffect(() => {
    sessionStorage.setItem("challenges-list-state", JSON.stringify({ page }));
  }, [page]);

  const loadMoreChallenges = async () => {
    if (!hasMoreData || isFetchingMore.current || loading) return;
    isFetchingMore.current = true;
    const nextPage = page + 1;
    try {
      const data = await getFavoriteChallenges({
        page: nextPage,
        limit: CHALLENGES_PER_PAGE,
      });
      if (data.length === 0) {
        setHasMoreData(false);
      } else {
        setFavoriteChallenges((prev) => {
          const existingIds = new Set(prev.map((c) => c.id));
          return [...prev, ...data.filter((c) => !existingIds.has(c.id))];
        });
        setPage(nextPage);
        if (data.length < CHALLENGES_PER_PAGE) setHasMoreData(false);
      }
    } finally {
      isFetchingMore.current = false;
    }
  };

  return {
    favoriteChallenges,
    loading,
    page,
    loadMoreChallenges,
    hasMoreData,
  };
}
