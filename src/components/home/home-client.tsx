"use client";

// COMPONENTS
import { ChallengeList } from "@/components/home/challenge-list";
import { SelectFilter } from "@/components/home/selectFilter";

// STYLES
import { homeStyles as styles } from "@/components/home/home.styles";

// HOOKS
import { useHome, type ChallengeSort } from "@/features/hooks/useHome";

interface HomeClientProps {
  searchParams: {
    sortBy?: ChallengeSort;
    since?: "1w" | "1m" | "3m" | "6m" | "1y";
  };
}

export default function HomeClient({ searchParams }: HomeClientProps) {
  const { challenges, filter, setFilter, isLoading } = useHome(
    searchParams.sortBy ?? "votes",
    searchParams.since,
  );

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
                <h2 className={styles.sectionTitle}>
                  Top challenges populaires
                </h2>

                <p className={styles.sectionDescription}>
                  Les défis les plus joués par la communauté.
                </p>
              </div>

              <div className={styles.sortContainer}>
                <span className={styles.sortLabel}>Trier par</span>

                <SelectFilter value={filter} onChange={setFilter} />
              </div>
            </div>

            {isLoading ? (
              <p>Chargement...</p>
            ) : (
              <ChallengeList challenges={challenges} />
            )}
          </section>
        </section>
      </div>
    </main>
  );
}
