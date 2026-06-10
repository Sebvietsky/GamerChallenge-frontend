"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { getChallenges } from "@/features/api/challenge.api";
import {
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

export function useChallenges() {
  const [challenges, setChallenges] = useState<ChallengeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasMoreData, setHasMoreData] = useState(true);
  const isFetchingMore = useRef(false);
  const [page, setPage] = useState(CHALLENGES_DEFAULT_PAGE);
  const [orderBy, setOrderBy] = useState<OrderBy>(CHALLENGES_ORDER_BY.votes);
  const [since, setSince] = useState(CHALLENGES_SINCE);
  const [sort, setSort] = useState<Sort>(CHALLENGES_SORT.desc);
  const { search } = useSearch();
  const debouncedSearch = useDebounce(search, 300);
  const isEasterEggSearch = debouncedSearch.trim().toLowerCase() === "easter egg";
  const easterEggChallenge = useMemo<EasterEggChallenge>(() => EASTER_EGG as EasterEggChallenge, []);

  // Fetch initial / reset quand les filtres changent
  useEffect(() => {
    async function fetchChallenges() {
      setLoading(true);
      setHasMoreData(true);
      setPage(CHALLENGES_DEFAULT_PAGE);
      try {
        const data = await getChallenges({
          page: CHALLENGES_DEFAULT_PAGE,
          limit: CHALLENGES_PER_PAGE,
          orderBy,
          sort,
          since,
          search: debouncedSearch,
        });
        setChallenges(isEasterEggSearch ? [easterEggChallenge, ...data] : data);
        if (data.length < CHALLENGES_PER_PAGE) setHasMoreData(false);
      } finally {
        setLoading(false);
      }
    }
    fetchChallenges();
  }, [orderBy, sort, debouncedSearch, since, isEasterEggSearch, easterEggChallenge]);

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
    loadMoreChallenges,
    hasMoreData,
    setOrderBy,
    setSince,
    setSort,
  };
}
