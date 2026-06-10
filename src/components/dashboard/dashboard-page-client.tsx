"use client";

import Image from "next/image";

import { User, Trophy, Heart, Vote, Medal } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/features/hooks/useAuth";
import { NavButton } from "@/components/dashboard/nav-button";
import { dashboardLink } from "@/components/dashboard/nav-button-link";
import { dashboardStyles as styles } from "@/styles/dashboard.styles";
import { DashboardModelView } from "@/features/types/dashboard.type";

type DashboardPageClientProps = {
  dashboard: DashboardModelView;
};

export function DashboardPageClient({ dashboard }: DashboardPageClientProps) {
  const { user } = useAuth();
  console.log(dashboard);

  return (
    <div className={styles.page}>
      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <section className={styles.header}>
        <h1 className={styles.title}>Tableau de bord</h1>
      </section>

      {/* =====================================================
          PLAYER PROFILE
      ===================================================== */}

      <Card className={styles.profileCard}>
        <div className={styles.profileContent}>
          {user?.userWithoutPassword.profilePicture ? (
            <Image
              src={user.userWithoutPassword.profilePicture}
              alt="Photo de profil"
              width={120}
              height={120}
              className="rounded-full border-2 border-primary object-cover"
            />
          ) : (
            <div className={styles.avatar}>
              <User className={styles.avatarIcon} />
            </div>
          )}

          <div className={styles.profileInfo}>
            <h2 className={styles.username}>
              {user?.userWithoutPassword.username ?? "Utilisateur"}
            </h2>

            <p className={styles.rank}>{dashboard.level}</p>

            {user?.userWithoutPassword.country && (
              <p className={styles.country}>
                🌍 {user.userWithoutPassword.country}
              </p>
            )}

            {/* Reputation */}

            <div className={styles.reputationContainer}>
              <div className={styles.reputationHeader}>
                <span>Réputation</span>

                <span>
                  {dashboard.nextLevelStep
                    ? `${dashboard.reputation} / ${dashboard.nextLevelStep}`
                    : `${dashboard.reputation} XP`}
                </span>
              </div>

              <div className={styles.reputationBar}>
                <div className={styles.reputationProgress} />
              </div>

              <p className={styles.reputationText}>
                {dashboard.nextLevel
                  ? `Plus que ${dashboard.pointsToNextLevel} points pour atteindre ${dashboard.nextLevel}`
                  : "🏆 Félicitations, vous avez atteint le rang ULTIME 🏆"}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.bioContainer}>
          <h3 className={styles.bioTitle}>Biographie</h3>

          <p className={styles.bioText}>
            {user?.userWithoutPassword.bio ?? "C'est un peu vide ici..."}
          </p>
        </div>
      </Card>

      {/* =====================================================
          STATISTICS
      ===================================================== */}

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🏆 Statistiques</h2>

        <div className={styles.statsGrid}>
          <Card className={styles.statCard}>
            <Trophy className={styles.statIcon} />

            <p className={styles.statLabel}>Challenges créés</p>

            <p className={styles.statValue}>{dashboard.stats.challenges}</p>
          </Card>

          <Card className={styles.statCard}>
            <Medal className={styles.statIcon} />

            <p className={styles.statLabel}>Participations</p>

            <p className={styles.statValue}>{dashboard.stats.participations}</p>
          </Card>

          <Card className={styles.statCard}>
            <Heart className={styles.statIcon} />

            <p className={styles.statLabel}>Votes reçus</p>

            <p className={styles.statValue}>{dashboard.stats.votesReceived}</p>
          </Card>

          <Card className={styles.statCard}>
            <Vote className={styles.statIcon} />

            <p className={styles.statLabel}>Votes donnés</p>

            <p className={styles.statValue}>{dashboard.stats.votesGiven}</p>
          </Card>
        </div>
      </section>

      {/* =====================================================
          HALL OF FAME
      ===================================================== */}

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🔥 Hall of Fame</h2>

        <div className={styles.hallOfFameGrid}>
          <Card className={styles.hallOfFameCard}>
            <h3 className={styles.hallOfFameTitle}>
              Challenge le plus populaire
            </h3>

            <p className={styles.hallOfFameText}>
              Aucun challenge populaire pour le moment.
            </p>
          </Card>

          <Card className={styles.hallOfFameCard}>
            <h3 className={styles.hallOfFameTitle}>
              Participation la plus populaire
            </h3>

            <p className={styles.hallOfFameText}>
              Aucune participation populaire pour le moment.
            </p>
          </Card>
        </div>
      </section>

      {/* =====================================================
          ACHIEVEMENTS
      ===================================================== */}

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🎖️ Succès</h2>

        <Card className={styles.achievementsCard}>
          <div className={styles.achievementsList}>
            <Badge variant="secondary">Premier défi</Badge>

            <Badge variant="secondary">Première participation</Badge>

            <Badge variant="secondary">Premier vote reçu</Badge>

            <Badge variant="secondary">Créateur confirmé</Badge>

            <Badge variant="secondary">Influenceur</Badge>

            <Badge variant="secondary">Légende</Badge>
          </div>
        </Card>
      </section>

      {/* =====================================================
          QUICK ACCESS
      ===================================================== */}

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>⭐ Accès rapides</h2>

        <Card className={styles.navigationCard}>
          <nav className={styles.navigationGrid}>
            {dashboardLink.map((link) => (
              <NavButton key={link.path} {...link} />
            ))}
          </nav>
        </Card>
      </section>
    </div>
  );
}
