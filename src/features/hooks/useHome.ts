"use client";

import { useEffect, useState } from "react";

import { getHomeChallenges } from "../api/challenge.api";
import { OrderBy, type Challenge, type queryParams } from "../types/challenge.type";

export type HomeChallengeOrderBy = "votes" | "createdAt" | "participations";

const HOME_CHALLENGE_ORDER_BY_VALUES: HomeChallengeOrderBy[] = [
  "votes",
  "createdAt",
  "participations",
];

function isHomeChallengeOrderBy(orderBy: unknown): orderBy is HomeChallengeOrderBy {
  return HOME_CHALLENGE_ORDER_BY_VALUES.includes(
    orderBy as HomeChallengeOrderBy,
  );
}

export function useHome({
  orderBy = OrderBy.votes,
  since,
  limit = 3,
}: queryParams = {}) {
  const initialOrderBy = isHomeChallengeOrderBy(orderBy) ? orderBy : "votes";

  const [filter, setFilter] = useState<OrderBy>(initialOrderBy as OrderBy);

  const [challenges, setChallenges] = useState<Challenge[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadChallenges() {
      try {
        setIsLoading(true);
        const data = await getHomeChallenges({
          orderBy: filter,
          since,
          limit,
        });

        setChallenges(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadChallenges();
  }, [filter, limit, since]);

  return {
    challenges,
    filter,
    setFilter,
    isLoading,
    orderBy: filter as OrderBy,
  };
}
