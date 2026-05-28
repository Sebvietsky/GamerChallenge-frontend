// COMPONENTS
import { Banner } from "@/components/common/banner/banner";

import { ChallengeList } from "@/components/home/challenge-list";

// STYLES
import { homeStyles as styles } from "@/components/home/home.styles";

export default function HomePage() {
  return (
    <main className={styles.page}>
      <div className={styles.layout}>
        <section className={styles.main}>
          {/* CHALLENGE SHOWCASE */}
          <section className={styles.showcaseSection}>
            <div className={styles.showcaseContent}>
              <div className={styles.showcaseBadge}>
                🎮 Plateforme communautaire gaming
              </div>

              <h1 className={styles.showcaseTitle}>
                Crée des défis pour ton jeu de cœur et fais découvrir de
                nouvelles manières d’y jouer à la communauté !
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

            {/* SHOWCASE GLOW */}
            <div className={styles.showcaseGlow} />
          </section>

          {/* POPULAR CHALLENGES */}
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
            </div>

            <ChallengeList />
          </section>

          {/* COMMUNITY CTA */}
          <section className={styles.communitySection}>
            <div>
              <h2 className={styles.communityTitle}>
                Tu connais ton jeu par cœur ?
              </h2>

              <p className={styles.communityDescription}>
                Imagine le défi que personne n’a encore osé.
              </p>
            </div>

            <div className={styles.showcaseActions}>
              <button className={styles.primaryButton}>
                Créer un challenge
              </button>

              <button className={styles.lightButton}>
                Comment ça marche ?
              </button>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
