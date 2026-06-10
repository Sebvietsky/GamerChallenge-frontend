"use client";

import { useEffect, useState } from "react";

import { ChallengeList } from "@/components/home/challenge-list";

import { getChallenges } from "@/features/api/challenge.api";
import { useDebounce } from "@/features/hooks/useDebounce";
import { useSearch } from "@/features/hooks/useSearch";

import type { Challenge } from "@/features/types/challenge.type";
import { PageLoader } from "../ui/page-loader";

export function ChallengesPageClient() {
  const { search } = useSearch();

  const debouncedSearch = useDebounce(search, 300);

  const [challenges, setChallenges] = useState<Challenge[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadChallenges() {
      setLoading(true);

      const data = await getChallenges({
        page: 1,
        limit: 50,
        orderBy: "createdAt",
        sort: "asc",
        search: debouncedSearch,
      });

      setChallenges(data);
      setLoading(false);
    }

    loadChallenges();
  }, [debouncedSearch]);

  useEffect(() => {
    if (loading) return;
    const raw = sessionStorage.getItem("scroll-restore");
    if (!raw) return;
    try {
      const { from, y } = JSON.parse(raw);
      if (from === window.location.pathname) {
        window.scrollTo(0, y);
        sessionStorage.removeItem("scroll-restore");
      }
    } catch {}
  }, [loading]);

  if (loading) {
    return <PageLoader />;
  }

  return <ChallengeList challenges={challenges} />;
}
