"use client";

import { useEffect, useState } from "react";

import { getChallenges } from "@/features/api/challenge.api";
import type { Challenge, queryParams } from "@/features/types/challenge.type";

export function useChallenges({page = 1, limit = 20, orderBy = "votes", sort = "desc", since = undefined}: queryParams) {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadChallenges() {
      try {
        const data = await getChallenges({page, limit, orderBy, sort, since});
        setChallenges(data);
      } finally {
        setLoading(false);
      }
    }

    loadChallenges();
  }, []);

  return { challenges, loading, page, limit, orderBy, sort, since };
}
