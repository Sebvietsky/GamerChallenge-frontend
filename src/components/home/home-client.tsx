"use client";

// COMPONENTS
import { useEffect } from "react";
import { ChallengeList } from "@/components/home/challenge-list";
import { SelectFilter } from "@/components/home/selectFilter";

// STYLES
import { homeStyles as styles } from "@/components/home/home.styles";

// HOOKS
import { HomeChallengeOrderBy, useHome } from "@/features/hooks/useHome";
import type { OrderBy, queryParams } from "@/features/types/challenge.type";
import { PageLoader } from "../ui/page-loader";
import { useAuth } from "@/features/hooks/useAuth";
import { useDashboard } from "@/features/hooks/useDashboard";
import Link from "next/link";

interface HomeClientProps {
  queryParams: queryParams;
}

export default function HomeClient({ queryParams }: HomeClientProps) {
  const { challenges, filter, setFilter, isLoading } = useHome(queryParams);
  const { user } = useAuth();
  const { dashboard, loading } = useDashboard();

  useEffect(() => {
    if (isLoading) return;
    const raw = sessionStorage.getItem("scroll-restore");
    if (!raw) return;
    try {
      const { from, y } = JSON.parse(raw);
      if (from === window.location.pathname) {
        window.scrollTo(0, y);
        sessionStorage.removeItem("scroll-restore");
      }
    } catch {}
  }, [isLoading]);

  return (
    <section className={styles.page}>
      <div className={styles.layout}>
        <section className={styles.header}>
          {!loading && dashboard && (
            <div className={styles.userBanner}>
              <div className={styles.userBannerLeft}>
                <span className={styles.userBannerGreeting}>
                  Salut, {user?.userWithoutPassword.username} !
                </span>
                <span className={styles.userBannerLevel}>
                  {dashboard.level}
                </span>
              </div>

              {dashboard.nextLevel && (
                <div className={styles.userBannerProgress}>
                  <div className={styles.userBannerProgressLabel}>
                    <span>{dashboard.reputation} rep</span>
                    <span>→ {dashboard.nextLevel}</span>
                  </div>
                  <div className={styles.userBannerProgressBar}>
                    <div
                      className={styles.userBannerProgressFill}
                      style={{ width: `${dashboard.progressPercent}%` }}
                    />
                  </div>
                </div>
              )}

              <div className={styles.userBannerStats}>
                <span className={styles.userBannerStat}>
                  {dashboard.stats.challenges} défis
                </span>
                <span className={styles.userBannerStat}>
                  {dashboard.stats.participations} participations
                </span>
                <span className={styles.userBannerStat}>
                  {dashboard.stats.votesReceived} votes reçus
                </span>
              </div>
            </div>
          )}

          {/* HERO */}
          <section className={styles.showcaseSection}>
            <div className={styles.showcaseContent}>
              <h1 className={styles.showcaseTitle}>
                Crée des défis pour ton jeu de cœur et fais découvrir de
                nouvelles manières d&apos;y jouer à la communauté !
              </h1>

              <p className={styles.showcaseDescription}>
                Rejoins des milliers de joueurs passionnés, partage tes idées de
                challenges et découvre des expériences inédites.
              </p>

              <div className={styles.showcaseActions}>
                <Link href={"/create-challenge"}>
                  <button className={styles.primaryButton}>
                    Créer un challenge
                  </button>
                </Link>

                <Link href={"/challenges"}>
                  <button className={styles.secondaryButton}>
                    Voir les challenges
                  </button>
                </Link>
              </div>
            </div>

            <div className={styles.showcaseGlow} />
          </section>

          {/* CHALLENGES */}
          <section className={styles.challengeSection}>
            <div className={styles.sectionHeader}>
              <div>
                <h2 className={styles.sectionTitle}>Top challenges</h2>
              </div>

              <div className={styles.sortContainer}>
                <span className={styles.sortLabel}>Trier par</span>

                <SelectFilter
                  value={filter as HomeChallengeOrderBy} // as unknown as any
                  onChange={
                    (
                      v: HomeChallengeOrderBy, // any
                    ) => setFilter(v as OrderBy) // as any
                  }
                />
              </div>
            </div>

            {isLoading ? (
              <PageLoader />
            ) : (
              <ChallengeList challenges={challenges} />
            )}
          </section>
        </section>
      </div>
    </section>
  );
}
