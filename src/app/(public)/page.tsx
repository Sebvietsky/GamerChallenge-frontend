// COMPONENTS
import { ChallengeList } from "@/components/home/challenge-list";

// STYLES
import { homeStyles as styles } from "@/components/home/home.styles";
import { getChallenges } from "@/features/api/challenge.api";

export default async function HomePage() {
  const challenges = await getChallenges();

  return (
    <main className={styles.page}>
      <div className={styles.layout}>
        <section className={styles.main}>
          {/* CHALLENGE SHOWCASE */}
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

              <div className={styles.sortContainer}>
                <span className={styles.sortLabel}>Trier par</span>

                <select className={styles.sortSelect}>
                  <option value="votes">Votes</option>
                  <option value="recent">Plus récents</option>
                  <option value="participants">Participants</option>
                  <option value="favorites">Favoris</option>
                </select>
              </div>
            </div>

            <ChallengeList challenges={challenges} />
          </section>
        </section>
      </div>
    </main>
  );
}
