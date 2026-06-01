import Image from "next/image";
import { cn } from "@/lib/utils";
import { classementsStyles as styles } from "@/styles/classements.styles";
import { Couronne } from "./couronne";
import { FondPodium } from "./fond-podium";
import { Lauriers } from "./lauriers";
import type { PodiumItem } from "./ClassementType";

export function CartePodium({
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
      <FondPodium />
      <div className={styles.podiumSection}>
        <div className={styles.crownWrapper}>
          <Couronne color={item.crownColor} />
        </div>

        <div className={styles.avatarWrap}>
          <Lauriers />
          <div className={styles.avatarRing}>
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 160px, 160px"
              className="rounded-full object-cover"
              unoptimized
            />
          </div>
          <div className={styles.rankBadge}>{item.rank}</div>
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

        <h3 className={compact ? styles.sideTitle : styles.cardTitle}>
          {item.title}
        </h3>
        <p className={styles.subtitle}>{item.subtitle}</p>

        <div className={styles.statsRow}>
          {item.stats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
