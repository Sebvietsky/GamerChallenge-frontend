// COMPONENTS
import { ChallengeList } from "@/components/home/challenge-list";

// STYLES
import { homeStyles as styles } from "@/components/common/styles/home.styles";

export default function HomePage() {
  return (
    <main className={styles.page}>
      <div className={styles.layout}>
        <section className={styles.main}>
          <div className={styles.divWelcome}>
            <section className={styles.welcome}>
              <h1 className={styles.title}>Bienvenue sur GamerChallenges !</h1>
              <p className={styles.presentation}>
                Relevez des défis, partagez vos exploits et connectez-vous avec
                d&lsquo;autres gamers passionnés.
              </p>
            </section>
          </div>

          <div className={styles.gridChallenges}>
            <h1 className={styles.title}> Top Challenge Populaires </h1>
            <ChallengeList />
          </div>
        </section>
      </div>
    </main>
  );
}
