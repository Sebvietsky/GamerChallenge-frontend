"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { getChallenges } from "@/features/api/challenge.api";
import {
  CategoryName,
  DifficultyName,
  EasterEggChallenge,
  OrderBy,
  Sort,
  type ChallengeItem,
} from "@/features/types/challenge.type";
import {
  CHALLENGES_DEFAULT_PAGE,
  CHALLENGES_ORDER_BY,
  CHALLENGES_PER_PAGE,
  CHALLENGES_SINCE,
  CHALLENGES_SORT,
  EASTER_EGG,
} from "@/lib/constants";
import { useSearch } from "./useSearch";
import { useDebounce } from "./useDebounce";

type ChallengesListState = {
  page: number;
  orderBy: OrderBy;
  sort: Sort;
  search: string;
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
    if (parsed.search) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function useChallenges() {
  const [restoredState] = useState(readRestoredListState);
  const [challenges, setChallenges] = useState<ChallengeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasMoreData, setHasMoreData] = useState(true);
  const isFetchingMore = useRef(false);
  const restoredPage = useRef(restoredState?.page ?? null);
  const [page, setPage] = useState(restoredState?.page ?? CHALLENGES_DEFAULT_PAGE);
  const [orderBy, setOrderBy] = useState<OrderBy>(restoredState?.orderBy ?? CHALLENGES_ORDER_BY.votes);
  const [since, setSince] = useState(CHALLENGES_SINCE);
  const [sort, setSort] = useState<Sort>(restoredState?.sort ?? CHALLENGES_SORT.desc);
  const { search } = useSearch();
  const debouncedSearch = useDebounce(search, 300);
  const isEasterEggSearch =
    debouncedSearch.trim().toLowerCase() === "easter egg";
  const easterEggChallenge = useMemo<EasterEggChallenge>(
    () => EASTER_EGG as EasterEggChallenge,
    [],
  );

  // Fetch initial / reset quand les filtres changent.
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
        const data = await getChallenges({
          page: CHALLENGES_DEFAULT_PAGE,
          limit,
          orderBy,
          sort,
          categories: selectedCategories,
          difficulties: selectedDifficulties,
          since,
          search: debouncedSearch,
        });
        setChallenges(isEasterEggSearch ? [easterEggChallenge, ...data] : data);
        if (data.length < limit) setHasMoreData(false);
      } finally {
        restoredPage.current = null;
        setLoading(false);
      }
    }
    fetchChallenges();
  }, [
    orderBy,
    sort,
    selectedCategories,
    selectedDifficulties,
    debouncedSearch,
    since,
    isEasterEggSearch,
    easterEggChallenge,
  ]);

  // Persiste l'état courant de la liste pour pouvoir le restaurer au retour
  useEffect(() => {
    sessionStorage.setItem(
      "challenges-list-state",
      JSON.stringify({ page, orderBy, sort, search: debouncedSearch }),
    );
  }, [page, orderBy, sort, debouncedSearch]);

  const loadMoreChallenges = async () => {
    if (!hasMoreData || isFetchingMore.current || loading) return;
    isFetchingMore.current = true;
    const nextPage = page + 1;
    try {
      const data = await getChallenges({
        page: nextPage,
        limit: CHALLENGES_PER_PAGE,
        orderBy,
        sort,
        categories: selectedCategories,
        difficulties: selectedDifficulties,
        since,
        search: debouncedSearch,
      });
      if (data.length === 0) {
        setHasMoreData(false);
      } else {
        setChallenges((prev) => {
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
    challenges,
    loading,
    page,
    orderBy,
    sort,
    since,
    selectedCategories,
    setSelectedCategories,
    selectedDifficulties,
    setSelectedDifficulties,
    loadMoreChallenges,
    hasMoreData,
    setOrderBy,
    setSince,
    setSort,
  };
}
