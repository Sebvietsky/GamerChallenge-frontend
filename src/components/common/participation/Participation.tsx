"use client";

import { useState } from "react";
import { formatNumber } from "@/lib/utils";
import { ParticipationCard } from "./ParticipationCard";
import { challengeDetail as styles } from "@/styles/challenge-detail.styles";
import type { Challenge, Participation } from "@/features/types/challenge.type";
import { Button } from "@/components/ui/button";

type SortType = "newest" | "popular";

interface ParticipationProps {
  participations: Participation[] | null;
  challenge: Challenge;
}

export function Participation({
  participations,
  challenge,
}: ParticipationProps) {
  const [sort, setSort] = useState<SortType>("newest");
  if (!participations) return null;
  const sorted = [...participations].sort((a, b) => {
    if (sort === "popular") return b._count.votes - a._count.votes;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <section className={styles.participationSection}>
      <div className={styles.participationHeader}>
        <h2 className={styles.participationTitle}>
          Participations ({formatNumber(participations.length)})
        </h2>
        <div className={styles.filterContainer}>
          <Button
            variant={sort === "newest" ? "filterButton" : "filterButtonAlt"}
            onClick={() => setSort("newest")}
          >
            Nouveautés
          </Button>
          <Button
            variant={sort === "popular" ? "filterButton" : "filterButtonAlt"}
            onClick={() => setSort("popular")}
          >
            Popularités
          </Button>
        </div>
      </div>
      <ul className={styles.participationList}>
        {sorted.map((p) => (
          <ParticipationCard
            key={p.id ?? p.title}
            data={p}
            challenge={challenge}
          />
        ))}
        {/* <ParticipationCard className={styles.participationCard}/>
        <ParticipationCard className={styles.participationCard}/>
        <ParticipationCard className={styles.participationCard}/> */}
      </ul>
    </section>
  );
}
