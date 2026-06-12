"use client";

import Image from "next/image";
import Link from "next/link";
import { formatNumber } from "@/lib/utils";
import { Heart, ChevronRight } from "lucide-react";
import { homeStyles as styles } from "@/styles/global.styles";
import { Button } from "../ui/button";
import { TagContainer } from "../common/tagContainer/TagContainer";
import type { ParticipationItem } from "@/features/types/participation.type";

interface ParticipationProps {
  participation: ParticipationItem;
  onClick?: (participation: ParticipationItem) => void;
}

export function ParticipationCard({
  participation,
  onClick,
}: ParticipationProps) {
  const handleClick = () => {
    sessionStorage.setItem(
      "scroll-restore",
      JSON.stringify({ from: window.location.pathname, y: window.scrollY }),
    );
  };
  const cardContent = (
    <div className={styles.cardContainer}>
      <Image
        src={
          participation.challenge.game.coverUrl || "/images/image-not-found.png"
        }
        width={1000}
        height={1000}
        alt={`Image du jeu ${participation.challenge.game.name}`}
        loading="lazy"
        className={styles.imageCard}
      />
      <div className={styles.container}>
        <div className={styles.detailContainer}>
          <div id="tag" className={styles.titleCard}>
            <TagContainer data={participation.challenge} />
          </div>
          <h3 className={styles.gameTitle}>
            {participation.challenge.game.name}
          </h3>
          <h4 className={styles.participationTitle}>{participation.title}</h4>
          <div className={styles.statsContainer}>
            <p className={styles.stats}>
              <Heart />
              {formatNumber(participation._count?.votes)}
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
        onClick={() => onClick(participation)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onClick(participation);
          }
        }}
      >
        {cardContent}
      </div>
    );
  }

  return (
    <Link href={`/participations/${participation.slug}`} onClick={handleClick}>
      {cardContent}
    </Link>
  );
}
