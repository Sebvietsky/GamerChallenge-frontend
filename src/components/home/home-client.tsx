"use client";

// COMPONENTS
import { useEffect } from "react";
import { ChallengeList } from "@/components/home/challenge-list";
import { SelectFilter } from "@/components/home/selectFilter";

// STYLES
import { homeStyles as styles } from "@/components/home/home.styles";

// HOOKS
import { useHome } from "@/features/hooks/useHome";
import type { queryParams } from "@/features/types/challenge.type";
import { PageLoader } from "../ui/page-loader";

interface HomeClientProps {
  queryParams: queryParams;
}

export default function HomeClient({ queryParams }: HomeClientProps) {
  const { challenges, filter, setFilter, isLoading } = useHome(queryParams);

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
    <main className={styles.page}>
      <div className={styles.layout}>
        <section className={styles.main}>
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
                <button className={styles.primaryButton}>
                  Créer un challenge
                </button>

                <button className={styles.secondaryButton}>
                  Voir les challenges
                </button>
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

                <SelectFilter value={filter} onChange={setFilter} />
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
    </main>
  );
}
