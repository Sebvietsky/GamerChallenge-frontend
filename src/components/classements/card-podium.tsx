import Image from "next/image";
import { cn } from "@/lib/utils";
import { classementsStyles as styles } from "@/styles/classements.styles";
import { Crown } from "./crown";
import { BgPodium } from "./bg-podium";
import { Laurels } from "./laurels";
import { Medals } from "./medals";
import type { PodiumItem } from "./ClassementType";

export function CardPodium({
  item,
  compact = false,
}: {
  item: PodiumItem;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        compact ? styles.sideCard : styles.podiumMain,
        styles.podiumCard,
      )}
    >
      <BgPodium />
      <div className={styles.podiumSection}>
        {item.rank === 1 ? (
          <div className={styles.crownWrapper}>
            <Crown color={item.crownColor} />
          </div>
        ) : null}

        <div
          className={cn(styles.avatarWrap, compact && styles.avatarWrapCompact)}
        >
          <Laurels
            variant={item.crownColor}
            className={compact ? styles.laurelsCompact : styles.laurels}
          />
          <div
            className={cn(
              styles.avatarRing,
              compact && styles.avatarRingCompact,
            )}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 160px, 160px"
              className="rounded-full object-cover"
              unoptimized
            />
          </div>
          {item.rank <= 3 ? (
            <div
              className={cn(
                styles.medalBadge,
                compact && styles.medalBadgeCompact,
              )}
            >
              <Medals rank={item.rank} className="h-full w-full" />
            </div>
          ) : (
            <div className={styles.rankBadge}>{item.rank}</div>
          )}
        </div>

        {item.tags.length > 0 ? (
          <div className={styles.tags}>
            {item.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <h3 className={compact ? styles.cardTitleCompact : styles.cardTitle}>
          {item.title}
        </h3>
        <p className={styles.subtitle}>{item.subtitle}</p>

        <div className={compact ? styles.statsRowCompact : styles.statsRow}>
          {item.stats.map((stat) => (
            <div
              key={stat.label}
              className={compact ? styles.statCardCompact : styles.statCard}
            >
              <div
                className={compact ? styles.statValueCompact : styles.statValue}
              >
                {stat.value}
              </div>
              <div
                className={compact ? styles.statLabelCompact : styles.statLabel}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
