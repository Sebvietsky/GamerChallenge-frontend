"use client";

import React from "react";
import { leaderboardStyles as styles } from "@/styles/leaderboard.styles";
import { cn } from "@/lib/utils";

interface LeaderboardCardProps {
  rank: number;
  name: string;
  handle: string;
  avatar: string;
  points: number;
  wins: number;
  challengesCompleted: number;
}

export function LeaderboardCard({
  rank,
  name,
  handle,
  avatar,
  points,
  wins,
  challengesCompleted,
}: LeaderboardCardProps) {
  // Determine medal emoji based on rank
  const getMedal = () => {
    switch (rank) {
      case 1:
        return "🥇";
      case 2:
        return "🥈";
      case 3:
        return "🥉";
      default:
        return "🏅";
    }
  };

  // Determine badge color based on rank
  const getRankBadgeClass = () => {
    switch (rank) {
      case 1:
        return styles.rankBadge1st;
      case 2:
        return styles.rankBadge2nd;
      case 3:
        return styles.rankBadge3rd;
      default:
        return styles.rankBadgeOther;
    }
  };

  return (
    <div className={styles.card}>
      {/* Background gradient with backdrop blur */}
      <div className={styles.cardGradient} />

      {/* Content */}
      <div className={styles.cardContent}>
        {/* Rank badge - top right */}
        <div className={styles.rankContainer}>
          <div className={cn(styles.rankBadge, getRankBadgeClass())}>
            #{rank}
          </div>
        </div>

        {/* Medal emoji */}
        <div className={styles.rankMedal}>{getMedal()}</div>

        {/* Avatar */}
        <img
          src={avatar}
          alt={name}
          className={styles.avatar}
          onError={(e) => {
            e.currentTarget.src =
              "https://api.dicebear.com/7.x/avataaars/svg?seed=" +
              encodeURIComponent(name);
          }}
        />

        {/* User info */}
        <h3 className={styles.userName}>{name}</h3>
        <p className={styles.userHandle}>@{handle}</p>

        {/* Stats section */}
        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <span className={styles.legacyStatValue}>{points}</span>
            <p className={styles.legacyStatLabel}>Points</p>
          </div>
          <div className={styles.statItem}>
            <span className={styles.legacyStatValue}>{wins}</span>
            <p className={styles.legacyStatLabel}>Victoires</p>
          </div>
          <div className={styles.statItem}>
            <span className={styles.legacyStatValue}>
              {challengesCompleted}
            </span>
            <p className={styles.legacyStatLabel}>Défis</p>
          </div>
        </div>
      </div>
    </div>
  );
}
