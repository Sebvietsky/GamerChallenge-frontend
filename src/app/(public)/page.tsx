// COMPONENTS
import { ChallengeList } from "@/components/home/challenge-list";

// STYLES
import { homeStyles as styles } from "@/components/home/home.styles";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getChallenges } from "@/features/api/challenge.api";
import { queryParams } from "@/features/types/challenge.type";

export default async function HomePage({searchParams,

}: {
  searchParams: Promise<queryParams>
}) {
  const { page, limit, sort, orderBy, since} = await searchParams;
  
  const challenges = await getChallenges({page: Number(page ?? 1),limit: Number(limit ?? 3), sort: sort ?? "desc", orderBy: orderBy ?? "votes", since: since ?? undefined});
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

                <Select defaultValue="votes">
                  <SelectTrigger className={styles.sortSelect}>
                    <SelectValue />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="votes">Tendances</SelectItem>
                    <SelectItem value="recent">Plus récents</SelectItem>
                    <SelectItem value="participants">Participations</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <ChallengeList challenges={challenges} />
          </section>
        </section>
      </div>
    </main>
  );
}
