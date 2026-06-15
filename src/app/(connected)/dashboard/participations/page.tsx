import { DashboardContentCard } from "@/components/dashboard/dashboard-content-card";
import { dashboardContentStyles as styles } from "@/styles/dashboard-content.styles";
import { getInformationDashboardServer } from "@/features/api/dashboard.api.server";
import { DashboardParticipation } from "@/features/types/dashboard-content.type";

export default async function DashboardParticipationsPage() {
  const dashboard = await getInformationDashboardServer();

  const participations = dashboard.allUserParticipations;

  if (!participations.length) {
    return (
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>Mes Participations</h1>

          <p className={styles.subtitle}>
            Retrouvez toutes les participations que vous avez créés.
          </p>
        </div>

        <div className={styles.emptyState}>
          <p>Vous n&lsquo;avez créé aucune participation.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Mes Participations</h1>

        <p className={styles.subtitle}>
          {participations.length} participation
          {participations.length > 1 ? "s" : ""} publiée
          {participations.length > 1 ? "s" : ""}
        </p>
      </div>

      <div className={styles.grid}>
        {participations.map((participation: DashboardParticipation) => (
          <DashboardContentCard
            key={participation.slug}
            href={`/participations/${participation.slug}`}
            image={participation.challenge.game.coverUrl}
            game={participation.challenge.game.name}
            title={participation.title}
            votes={participation._count.votes}
          />
        ))}
      </div>
    </div>
  );
}
