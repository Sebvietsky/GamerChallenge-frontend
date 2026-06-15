import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Heart, Users } from "lucide-react";

import { dashboardContentStyles as styles } from "@/styles/dashboard-content.styles";
import { DashBoardContentCardProps } from "@/features/types/dashboard-content.type";

export function DashboardContentCard({
  href,
  image,
  game,
  title,
  votes,
  participations,
  badge,
}: DashBoardContentCardProps) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={image || "/images/image-not-found.png"}
          alt={title}
          fill
          sizes="240px"
          className={styles.image}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.game}>{game}</p>

          <h2 className={styles.titleCard}>{title}</h2>

          <div className={styles.stats}>
            <span className={styles.stat}>
              <Heart size={16} />
              {votes}
            </span>

            {participations !== undefined && (
              <span className={styles.stat}>
                <Users size={16} />
                {participations}
              </span>
            )}
          </div>

          {badge && <span className={styles.statusBadge}>{badge}</span>}
        </div>

        <div className={styles.actionContainer}>
          <div className={styles.actionButton}>
            <ChevronRight size={24} />
          </div>
        </div>
      </div>
    </Link>
  );
}
