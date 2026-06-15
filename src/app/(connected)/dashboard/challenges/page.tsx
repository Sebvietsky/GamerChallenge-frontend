import { DashboardContentCard } from "@/components/dashboard/dashboard-content-card";
import { dashboardContentStyles as styles } from "@/styles/dashboard-content.styles";
import { getInformationDashboardServer } from "@/features/api/dashboard.api.server";
import { DashboardChallenge } from "@/features/types/dashboard-content.type";

export default async function DashboardChallengesPage() {
  const dashboard = await getInformationDashboardServer();

  const challenges = dashboard.allUserChallenges;

  if (!challenges.length) {
    return (
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>Mes Challenges</h1>

          <p className={styles.subtitle}>
            Retrouvez tous les challenges que vous avez créés.
          </p>
        </div>

        <div className={styles.emptyState}>
          <p>Vous n&lsquo;avez créé aucun challenge.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Mes Challenges</h1>

        <p className={styles.subtitle}>
          {challenges.length} challenge
          {challenges.length > 1 ? "s" : ""} publié
          {challenges.length > 1 ? "s" : ""}
        </p>
      </div>

      <div className={styles.grid}>
        {challenges.map((challenge: DashboardChallenge) => (
          <DashboardContentCard
            key={challenge.id}
            href={`/challenges/${challenge.slug}`}
            image={challenge.game.coverUrl}
            game={challenge.game.name}
            title={challenge.title}
            votes={challenge._count.votes}
            participations={challenge._count.participations}
            badge={challenge.status}
          />
        ))}
      </div>
    </div>
  );
}
