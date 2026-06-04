"use client";

import { ArrowRight, Sparkles, Trophy, Users } from "lucide-react";
import {
  ClassementType,
  type ClassementChallenge,
  type ClassementParticipation,
  type ClassementUser,
  type PodiumItem,
} from "@/components/classements/ClassementType";
import { ClassementPodium } from "@/components/classements/classement-podium";
import { FiltersClassements } from "@/components/classements/filters-classements";
import { classementsStyles as styles } from "@/styles/classements.styles";
import { useClassements } from "@/features/hooks/useClassements";

const filterOptions = [
  {
    id: ClassementType.CHALLENGES,
    icon: Trophy,
    title: "Les challenges les plus appréciés",
  },
  {
    id: ClassementType.UTILISATEURS,
    icon: Users,
    title: "Les utilisateurs les plus actifs",
  },
  {
    id: ClassementType.PARTICIPATIONS,
    icon: Sparkles,
    title: "Les participations les plus appréciées",
  },
] as const;

function formatNumber(value: number) {
  return value >= 1000 ? `${(value / 1000).toFixed(1)}k` : String(value);
}

function buildPodiumItems(
  filter: ClassementType,
  utilisateurItems: ClassementUser[],
  challengeItems: ClassementChallenge[],
  participationItems: ClassementParticipation[],
): PodiumItem[] {
  if (filter === ClassementType.UTILISATEURS) {
    return utilisateurItems.map((item) => ({
      rank: item.rank,
      title: item.username,
      subtitle: `Actif · ${item.challengesCreated} créations`,
      image: item.avatar,
      tags: ["Utilisateur", "Actif"],
      stats: [
        { value: formatNumber(item.participations), label: "Participations" },
        { value: formatNumber(item.votesGiven), label: "Votes donnés" },
        { value: `${item.challengesCreated} créations`, label: "Créations" },
      ],
      crownColor: "gold" as const,
    }));
  }

  if (filter === ClassementType.PARTICIPATIONS) {
    return participationItems.map((item) => ({
      rank: item.rank,
      title: item.challengeTitle,
      subtitle: `Par ${item.username}`,
      image: item.screenshot,
      tags: ["Participation", item.username],
      stats: [
        { value: formatNumber(item.votes), label: "Votes" },
        {
          value: `${item.rank === 1 ? "Top" : item.rank} ✔`,
          label: "Position",
        },
        { value: "Premium", label: "Classement" },
      ],
      crownColor: "gold" as const,
    }));
  }

  return challengeItems.map((item) => ({
    rank: item.rank,
    title: item.title,
    subtitle: item.game,
    image: item.image,
    tags: [item.game, item.rank === 1 ? "Top" : "Challenge"],
    stats: [
      { value: formatNumber(item.participations), label: "Participations" },
      { value: formatNumber(item.votes), label: "Votes" },
      { value: item.duration, label: "Durée" },
    ],
    crownColor: "gold" as const,
  }));
}

export default function ClassementsPage() {
  // ==================================================
  // HOOK
  // ==================================================
  const { filter, setFilter, users, challenges, participations, isLoading } =
    useClassements();

  // ==================================================
  // MAPPING
  // ==================================================
  const utilisateurItems: ClassementUser[] = users.map((user, index) => ({
    rank: index + 1,
    username: user.username,
    avatar: user.profilePicture ?? "/default-avatar.png",
    participations: user.participationCount,
    challengesCreated: user.challengeCount,
    votesGiven: user.totalActivity,
  }));

  const challengeItems: ClassementChallenge[] = challenges.map(
    (challenge, index) => ({
      rank: index + 1,
      title: challenge.title,
      game: "Jeu",
      image: "/default-challenge.jpg",
      participations: challenge.participationsCount,
      votes: challenge.votesCount,
      duration: "-",
    }),
  );

  const participationItems: ClassementParticipation[] = participations.map(
    (participation, index) => ({
      rank: index + 1,
      challengeTitle: participation.challengeTitle,
      username: participation.authorUsername,
      screenshot: "/default-participation.jpg",
      votes: participation.votesCount,
    }),
  );

  // ==================================================
  // PODIUM
  // ==================================================

  const podiumItems = buildPodiumItems(
    filter,
    utilisateurItems,
    challengeItems,
    participationItems,
  );

  if (isLoading) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <p>Chargement...</p>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.sectionTitle}>Les Classements</h1>

            <p className={styles.description}>
              Découvrez les résultats de la communauté selon différents
              critères.
            </p>
          </div>
        </header>

        <FiltersClassements
          options={filterOptions}
          active={filter}
          onChange={setFilter}
        />
        <ClassementPodium items={podiumItems} />

        <div className={styles.buttonWrap}>
          <button
            className={styles.button}
            aria-label="Voir le classement suivant"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
