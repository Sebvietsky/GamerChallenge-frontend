"use client";

import { useEffect, useState } from "react";

import { ChallengeList } from "@/components/home/challenge-list";

import { getChallenges } from "@/features/api/challenge.api";
import { useDebounce } from "@/features/hooks/useDebounce";
import { useSearch } from "@/features/hooks/useSearch";

import { OrderBy, Sort, type Challenge } from "@/features/types/challenge.type";
import { Button } from "../ui/button";

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
      <Button
        onClick={() => {
          if (orderBy === OrderBy.votes) {
            if (sort === Sort.asc) {
              setSort(Sort.desc);
            } else {
              setSort(Sort.asc);
            }
          }
          setOrderBy(OrderBy.votes);
        }}
      >
        {`Popularité ${sort === Sort.asc && orderBy === OrderBy.votes ? ">" : "<"}`}
      </Button>
      <Button
        onClick={() => {
          if (orderBy === OrderBy.createdAt) {
            if (sort === Sort.asc) {
              setSort(Sort.desc);
            } else {
              setSort(Sort.asc);
            }
          }
          setOrderBy(OrderBy.createdAt);
        }}
      >
        {`Récents ${sort === Sort.asc && orderBy === OrderBy.createdAt ? ">" : "<"}`}
      </Button>
      <Button
        onClick={() => {
          if (orderBy === OrderBy.title) {
            if (sort === Sort.asc) {
              setSort(Sort.desc);
            } else {
              setSort(Sort.asc);
            }
          }
          setOrderBy(OrderBy.title);
        }}
      >
        {`Alphabétique ${sort === Sort.asc && orderBy === OrderBy.title ? ">" : "<"}`}
      </Button>
      <ChallengeList challenges={challenges} />
    </>
  );
}
