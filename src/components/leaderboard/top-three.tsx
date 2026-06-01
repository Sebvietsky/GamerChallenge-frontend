"use client";

import React from "react";
import { leaderboardStyles as styles } from "@/styles/leaderboard.styles";

export type LeaderboardItem = {
  rank: number;
  title: string;
  tags: string[];
  avatar: string;
  participations: string;
  votes: string;
  duration: string;
};

function Crown({ color }: { color: "gold" | "silver" | "bronze" }) {
  const colorClass =
    color === "gold"
      ? "text-yellow-400"
      : color === "silver"
        ? "text-slate-400"
        : "text-orange-400";

  return (
    <div className={`${styles.crown} ${colorClass} drop-shadow-lg`}>👑</div>
  );
}

function Laurel({ color }: { color: "gold" | "silver" | "bronze" }) {
  const stroke =
    color === "gold" ? "#D4AF37" : color === "silver" ? "#A3A3A3" : "#D97706";

  return (
    <svg
      className={styles.topLaurelFrame}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 180 C60 40, 90 40, 120 110"
        stroke={stroke}
        strokeWidth="6"
        fill="none"
      />
      <path
        d="M210 180 C180 40, 150 40, 120 110"
        stroke={stroke}
        strokeWidth="6"
        fill="none"
      />
      <path
        d="M32 162 C58 140, 86 140, 112 162"
        stroke={stroke}
        strokeWidth="4"
        fill="none"
      />
      <path
        d="M208 162 C182 140, 154 140, 128 162"
        stroke={stroke}
        strokeWidth="4"
        fill="none"
      />
    </svg>
  );
}

function StarBurst() {
  return (
    <div className={styles.topStars}>
      <span className="absolute left-10 top-8 inline-block h-2 w-2 rounded-full bg-amber-300 opacity-90" />
      <span className="absolute left-20 top-20 inline-block h-2 w-2 rounded-full bg-amber-300 opacity-90" />
      <span className="absolute right-16 top-12 inline-block h-1.5 w-1.5 rounded-full bg-amber-300 opacity-90" />
      <span className="absolute right-8 top-28 inline-block h-2 w-2 rounded-full bg-amber-300 opacity-90" />
      <span className="absolute left-24 bottom-20 inline-block h-2 w-2 rounded-full bg-amber-300 opacity-90" />
      <span className="absolute right-24 bottom-14 inline-block h-1.5 w-1.5 rounded-full bg-amber-300 opacity-90" />
    </div>
  );
}

export function TopThree({
  first,
  second,
  third,
}: {
  first: LeaderboardItem;
  second: LeaderboardItem;
  third: LeaderboardItem;
}) {
  return (
    <div className={styles.topThreeWrap}>
      <div className={styles.topFirstCard}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-purple-50" />
        <StarBurst />
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(245,214,87,0.18),transparent_45%)]" />

        <div className={styles.topFirstInner}>
          <Crown color="gold" />

          <div className="relative mx-auto mb-4 h-40 w-40">
            <div className="absolute inset-0">
              <Laurel color="gold" />
            </div>
            <div className="relative h-full w-full overflow-hidden rounded-full border-[10px] border-white shadow-2xl">
              <img
                src={first.avatar}
                alt={first.title}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=" +
                    encodeURIComponent(first.title);
                }}
              />
            </div>
            <div className={styles.topFirstRankBadge}>1</div>
          </div>

          <div className={styles.topTagContainer}>
            {first.tags.map((tag) => (
              <span key={tag} className={styles.topTag}>
                {tag}
              </span>
            ))}
          </div>

          <h2 className={styles.topFirstTitle}>{first.title}</h2>

          <div className={styles.topStats}>
            <div className={styles.topStatBlock}>
              <span className={styles.topStatValue}>
                {first.participations}
              </span>
              <span className={styles.topStatLabel}>Participations</span>
            </div>
            <div className={styles.topStatBlock}>
              <span className={styles.topStatValue}>{first.votes}</span>
              <span className={styles.topStatLabel}>Votes</span>
            </div>
            <div className={styles.topStatBlock}>
              <span className={styles.topStatValue}>{first.duration}</span>
              <span className={styles.topStatLabel}>Durée</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.topSecondThirdGrid}>
        <div className={styles.sideCard}>
          <div className="relative">
            <Laurel color="silver" />
            <Crown color="silver" />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative mx-auto mb-3 h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-lg">
              <img
                src={second.avatar}
                alt={second.title}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=" +
                    encodeURIComponent(second.title);
                }}
              />
            </div>
            <p className={styles.sideCardSubtitle}>{second.tags.join(" · ")}</p>
            <h3 className={styles.sideCardTitle}>{second.title}</h3>
            <div className={styles.topStats}>
              <div className={styles.topStatBlock}>
                <span className={styles.topStatValue}>
                  {second.participations}
                </span>
                <span className={styles.topStatLabel}>Participations</span>
              </div>
              <div className={styles.topStatBlock}>
                <span className={styles.topStatValue}>{second.votes}</span>
                <span className={styles.topStatLabel}>Votes</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sideCard}>
          <div className="relative">
            <Laurel color="bronze" />
            <Crown color="bronze" />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative mx-auto mb-3 h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-lg">
              <img
                src={third.avatar}
                alt={third.title}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=" +
                    encodeURIComponent(third.title);
                }}
              />
            </div>
            <p className={styles.sideCardSubtitle}>{third.tags.join(" · ")}</p>
            <h3 className={styles.sideCardTitle}>{third.title}</h3>
            <div className={styles.topStats}>
              <div className={styles.topStatBlock}>
                <span className={styles.topStatValue}>
                  {third.participations}
                </span>
                <span className={styles.topStatLabel}>Participations</span>
              </div>
              <div className={styles.topStatBlock}>
                <span className={styles.topStatValue}>{third.votes}</span>
                <span className={styles.topStatLabel}>Votes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopThree;
