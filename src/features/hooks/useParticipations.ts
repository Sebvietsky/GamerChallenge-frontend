"use client";

import { useEffect, useRef, useState } from "react";

import { getTrendingParticipations } from "@/features/api/participation.api";
import { type ParticipationItem } from "@/features/types/participation.type";
import {
  PARTICIPATIONS_DEFAULT_PAGE,
  PARTICIPATIONS_PER_PAGE,
} from "@/lib/constants";

type ParticipationsListState = {
  page: number;
  search: string;
};

// État de la liste à restaurer quand l'utilisateur revient d'une page détail
// (présence de "scroll-restore" posé par ParticipationCard au clic).
function readRestoredListState(): ParticipationsListState | null {
  if (typeof window === "undefined") return null;
  try {
    const restore = sessionStorage.getItem("scroll-restore");
    const state = sessionStorage.getItem("participations-list-state");
    if (!restore || !state) return null;
    const { from } = JSON.parse(restore);
    if (from !== window.location.pathname) return null;
    const parsed: ParticipationsListState = JSON.parse(state);
    // La recherche est réinitialisée au remount : une position sauvegardée
    // sur une liste filtrée n'aurait plus de sens.
    if (parsed.search) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function useParticipations() {
  const [restoredState] = useState(readRestoredListState);
  const [participations, setParticipations] = useState<ParticipationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasMoreData, setHasMoreData] = useState(true);
  const isFetchingMore = useRef(false);
  const restoredPage = useRef(restoredState?.page ?? null);
  const [page, setPage] = useState(
    restoredState?.page ?? PARTICIPATIONS_DEFAULT_PAGE,
  );

  // Fetch initial / reset quand les filtres changent.
  // Au retour d'une page détail, recharge en un seul appel toutes les pages
  // déjà vues pour que la restauration du scroll retrouve la même hauteur.
  useEffect(() => {
    async function fetchParticipations() {
      setLoading(true);
      setHasMoreData(true);
      const pagesToLoad = restoredPage.current ?? PARTICIPATIONS_DEFAULT_PAGE;
      const limit = pagesToLoad * PARTICIPATIONS_PER_PAGE;
      setPage(pagesToLoad);
      try {
        const data = await getTrendingParticipations({
          page: PARTICIPATIONS_DEFAULT_PAGE,
          limit,
        });
        setParticipations(data);
        if (data.length <= limit) setHasMoreData(false);
      } finally {
        restoredPage.current = null;
        setLoading(false);
      }
    }
    fetchParticipations();
  }, []);

  // Persiste l'état courant de la liste pour pouvoir le restaurer au retour
  useEffect(() => {
    sessionStorage.setItem("challenges-list-state", JSON.stringify({ page }));
  }, [page]);

  const loadMoreParticipations = async () => {
    if (!hasMoreData || isFetchingMore.current || loading) return;
    isFetchingMore.current = true;
    const nextPage = page + 1;
    try {
      const data = await getTrendingParticipations({
        page: nextPage,
        limit: PARTICIPATIONS_PER_PAGE,
      });
      if (data.length === 0) {
        setHasMoreData(false);
      } else {
        setParticipations((prev) => {
          const existingIds = new Set(prev.map((c) => c.id));
          return [...prev, ...data.filter((c) => !existingIds.has(c.id))];
        });
        setPage(nextPage);
        if (data.length < PARTICIPATIONS_PER_PAGE) setHasMoreData(false);
      }
    } finally {
      isFetchingMore.current = false;
    }
  };

  return {
    participations,
    loading,
    page,
    loadMoreParticipations,
    hasMoreData,
  };
}
