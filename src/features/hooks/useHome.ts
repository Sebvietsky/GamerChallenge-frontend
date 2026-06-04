"use client";

import { useEffect, useState } from "react";

import { getHomeChallenges } from "../api/challenge.api";
import type { Challenge } from "../types/challenge.type";

export type ChallengeSort = "votes" | "createdAt" | "participations";

export function useHome(
  initialSort: ChallengeSort = "votes",
  since?: "1w" | "1m" | "3m" | "6m" | "1y",
) {
  const [filter, setFilter] = useState<ChallengeSort>(initialSort);

  const [challenges, setChallenges] = useState<Challenge[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadChallenges() {
      try {
        setIsLoading(true);

        const data = await getHomeChallenges({
          sortBy: filter,
          since,
          limit: 3,
        });

        setChallenges(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    loadChallenges();
  }, [filter, since]);

  return {
    challenges,
    filter,
    setFilter,
    isLoading,
  };
}
