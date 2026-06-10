"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { ChallengeList } from "@/components/home/challenge-list";

import { getChallenges } from "@/features/api/challenge.api";
import { useDebounce } from "@/features/hooks/useDebounce";
import { useSearch } from "@/features/hooks/useSearch";

import { PageLoader } from "../ui/page-loader";
import type {
  ChallengeItem,
  EasterEggChallenge,
} from "@/features/types/challenge.type";
import { isEasterEggChallenge } from "@/features/types/challenge.type";
import { OrderBy, Sort } from "@/features/types/challenge.type";
import { ChallengesOrderByButton } from "./challenges-orderBy-Button";
import { homeStyles } from "@/styles/global.styles";

export function ChallengesPageClient() {
  const router = useRouter();
  const { search } = useSearch();
  const debouncedSearch = useDebounce(search, 300);
  const [challenges, setChallenges] = useState<ChallengeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [orderBy, setOrderBy] = useState<OrderBy>(OrderBy.createdAt);
  const [sort, setSort] = useState<Sort>(Sort.asc);
  const isEasterEggSearch =
    debouncedSearch.trim().toLowerCase() === "easter egg";
  const easterEggChallenge = useMemo<EasterEggChallenge>(
    () => ({
      id: "easter_egg",
      slug: "easter_egg",
      title: "⚠️ NE PAS CLIQUER ⚠️",
      description: "On vous avait pourtant prévenu.",
      closesAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      status: "hidden",
      hints: "",
      goals: "",
      game: {
        name: "Système",
        studio: null,
        platform: null,
        coverUrl: "/images/image-not-found.png",
        bannerUrl: "",
        categories: [],
      },
      challengeCategory: {
        id: -1,
        name: "Système",
        colorCode: "#111827",
      },
      difficulty: {
        id: -1,
        name: "Système",
        colorCode: "#ef4444",
      },
      user: {
        username: "Système",
        country: null,
        profilePicture: null,
      },
      _count: {
        participations: 0,
        favoritedBy: 0,
        votes: 0,
      },
      isEasterEgg: true,
    }),
    [],
  );

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

      setChallenges(isEasterEggSearch ? [easterEggChallenge, ...data] : data);
      setLoading(false);
    }

    loadChallenges();
  }, [debouncedSearch, easterEggChallenge, isEasterEggSearch, orderBy, sort]);

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

  const handleChallengeClick = (challenge: ChallengeItem) => {
    if (isEasterEggChallenge(challenge)) {
      router.push("/easteregg.mp4");
      return;
    }

    return;
  };

  if (loading) {
    return <PageLoader />;
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

      <ChallengeList
        challenges={challenges}
        onChallengeClick={handleChallengeClick}
      />
    </>
  );
}
