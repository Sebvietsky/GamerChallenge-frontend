"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { ChallengeList } from "@/components/home/challenge-list";

import { PageLoader } from "../ui/page-loader";
import type { ChallengeItem } from "@/features/types/challenge.type";
import { isEasterEggChallenge } from "@/features/types/challenge.type";
import { OrderBy } from "@/features/types/challenge.type";
import { ChallengesOrderByButton } from "./challenges-orderBy-Button";
import { homeStyles } from "@/styles/global.styles";
import { useChallenges } from "@/features/hooks/useChallenges";

export function ChallengesPageClient() {
  const {
    challenges,
    loading,
    orderBy,
    setOrderBy,
    sort,
    setSort,
    hasMoreData,
    loadMoreChallenges,
  } = useChallenges();

  // loading ne concerne que le fetch initial/filtre — pas la pagination
  const isInitialLoading = loading && challenges.length === 0;

  const router = useRouter();

  useEffect(() => {
    if (isInitialLoading) return;
    const raw = sessionStorage.getItem("scroll-restore");
    if (!raw) return;
    try {
      const { from, y } = JSON.parse(raw);
      if (from === window.location.pathname) {
        window.scrollTo(0, y);
        sessionStorage.removeItem("scroll-restore");
      }
    } catch {}
  }, [isInitialLoading]);

  const handleChallengeClick = (challenge: ChallengeItem) => {
    if (isEasterEggChallenge(challenge)) {
      router.push("/easteregg.mp4");
    }
  };

  if (isInitialLoading) {
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
        hasMoreData={hasMoreData}
        loadMoreChallenges={loadMoreChallenges}
      />
    </>
  );
}
