"use client";

import { useEffect, useState } from "react";

import { ChallengeList } from "@/components/home/challenge-list";

import { getChallenges } from "@/features/api/challenge.api";
import { useDebounce } from "@/features/hooks/useDebounce";
import { useSearch } from "@/features/hooks/useSearch";

import { OrderBy, Sort, type Challenge } from "@/features/types/challenge.type";
import { ChallengesOrderByButton } from "./challenges-orderBy-Button";
import { homeStyles } from "@/styles/global.styles";

export function ChallengesPageClient() {
  const { search } = useSearch();

  const debouncedSearch = useDebounce(search, 300);

  const [challenges, setChallenges] = useState<Challenge[]>([]);

  const [loading, setLoading] = useState(true);

  const [orderBy, setOrderBy] = useState<OrderBy>(OrderBy.createdAt);

  const [sort, setSort] = useState<Sort>(Sort.asc);

  useEffect(() => {
    async function loadChallenges() {
      setLoading(true);

      const data = await getChallenges({
        page: 1,
        limit: 50,
        orderBy,
        sort,
        search: debouncedSearch,
      });

      setChallenges(data);
      setLoading(false);
    }

    loadChallenges();
  }, [debouncedSearch, orderBy, sort]);

  if (loading) {
    return <p>Chargement...</p>;
  }

  return (
    <>
      <div className={homeStyles.challengesOrderByButtonContainer}>
        <ChallengesOrderByButton
          selfOrderBy={OrderBy.createdAt}
          setOrderBy={setOrderBy}
          sort={sort}
          setSort={setSort}
          displayedText="Récents"
          currentOrderBy={orderBy}
        />
        <ChallengesOrderByButton
          selfOrderBy={OrderBy.votes}
          setOrderBy={setOrderBy}
          sort={sort}
          setSort={setSort}
          displayedText="Populaires"
          currentOrderBy={orderBy}
        />
        <ChallengesOrderByButton
          selfOrderBy={OrderBy.difficulty}
          setOrderBy={setOrderBy}
          sort={sort}
          setSort={setSort}
          displayedText="Difficulté"
          currentOrderBy={orderBy}
        />
      </div>

      <ChallengeList challenges={challenges} />
    </>
  );
}
