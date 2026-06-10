"use client";

import Image from "next/image";
import Link from "next/link";
import { getTextColor, formatNumber } from "@/lib/utils";
import { Users, Heart, ChevronRight } from "lucide-react";
import { homeStyles as styles } from "@/styles/global.styles";
import { Button } from "../ui/button";

import type { ChallengeItem } from "@/features/types/challenge.type";

interface ChallengeProps {
  challenge: ChallengeItem;
  onClick?: (challenge: ChallengeItem) => void;
}

export function ChallengeCard({ challenge, onClick }: ChallengeProps) {
  const cardContent = (
    <div className={styles.cardContainer}>
      <Image
        src={challenge.game.coverUrl || "/images/image-not-found.png"}
        width={1000}
        height={1000}
        alt={`Image du jeu ${challenge.game.name}`}
        loading="lazy"
        className={styles.imageCard}
      />
      <div className={styles.container}>
        <div className={styles.detailContainer}>
          <div id="tag" className={styles.titleCard}>
            <p
              className={styles.tag}
              style={{
                backgroundColor: challenge.difficulty.colorCode,
                color: getTextColor(challenge.difficulty.colorCode),
                borderColor: getTextColor(challenge.difficulty.colorCode),
              }}
            >
              {challenge.difficulty.name}
            </p>
            <p
              className={styles.tag}
              style={{
                backgroundColor: challenge.challengeCategory.colorCode,
                color: getTextColor(challenge.challengeCategory.colorCode),
                borderColor: getTextColor(
                  challenge.challengeCategory.colorCode,
                ),
              }}
            >
              {challenge.challengeCategory.name}
            </p>
          </div>
          <h3 className={styles.gameTitle}>{challenge.game.name}</h3>
          <h4 className={styles.challengeTitle}>{challenge.title}</h4>
          <div className={styles.statsContainer}>
            <p className={styles.stats}>
              <Users />
              {formatNumber(challenge._count?.participations)}
            </p>
            <p className={styles.stats}>
              <Heart />
              {formatNumber(challenge._count?.votes)}
            </p>
          </div>
        </div>
        <Button size="icon" className="h-13 w-13 rounded-full">
          <ChevronRight className="size-10" />
        </Button>
      </div>
    </div>
  );

  if (onClick) {
    return (
      <div
        role="button"
        tabIndex={0}
        className="cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary/80"
        onClick={() => onClick(challenge)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onClick(challenge);
          }
        }}
      >
        {cardContent}
      </div>
    );
  }

  return <Link href={`/challenges/${challenge.slug}`}>{cardContent}</Link>;
}
