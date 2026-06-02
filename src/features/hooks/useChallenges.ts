"use client";

import { useEffect, useState } from "react";

import { getChallenges } from "@/features/api/challenge.api";
import type { Challenge } from "@/features/types/challenge.type";

export function useChallenges() {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadChallenges() {
      try {
        const data = await getChallenges();
        setChallenges(data);
      } finally {
        setLoading(false);
      }
    }

    loadChallenges();
  }, []);

  return { challenges, loading };
}
