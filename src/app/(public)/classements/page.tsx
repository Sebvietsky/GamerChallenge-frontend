"use client";

import { ArrowRight, Sparkles, Trophy, Users } from "lucide-react";
import { useState } from "react";
import {
  ClassementType,
  type ClassementChallenge,
  type ClassementParticipation,
  type ClassementUtilisateur,
  type PodiumItem,
} from "@/components/classements/ClassementType";
import { ClassementPodium } from "@/components/classements/classement-podium";
import { FiltresClassements } from "@/components/classements/filtres-classements";
import { classementsStyles as styles } from "@/styles/classements.styles";

const filterOptions = [
  {
    id: ClassementType.CHALLENGES,
    icon: Trophy,
    title: "Les challenges les plus appréciés",
    description:
      "Basé sur le nombre de participations et les votes de la communauté",
  },
  {
    id: ClassementType.UTILISATEURS,
    icon: Users,
    title: "Les utilisateurs les plus actifs",
    description: "Activité globale, créations et participations",
  },
  {
    id: ClassementType.PARTICIPATIONS,
    icon: Sparkles,
    title: "Les participations les plus appréciées",
    description: "Votes reçus par la communauté",
  },
] as const;

const challengeItems: ClassementChallenge[] = [
  {
    rank: 1,
    title: "Rainbow Road sans toucher le sol",
    game: "Mario Kart",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
    participations: 2400,
    votes: 320,
    duration: "3j 14h",
  },
  {
    rank: 2,
    title: "Une saison sans dormir",
    game: "Stardew Valley",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    participations: 1800,
    votes: 210,
    duration: "5j",
  },
  {
    rank: 3,
    title: "Pantheon of Hallowfest no-hit",
    game: "Hollow Knight",
    image:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80",
    participations: 1800,
    votes: 156,
    duration: "2j",
  },
];

const utilisateurItems: ClassementUtilisateur[] = [
  {
    rank: 1,
    username: "Mila la Créatrice",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    participations: 3100,
    challengesCreated: 24,
    votesGiven: 410,
  },
  {
    rank: 2,
    username: "Noah le Stratège",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    participations: 2600,
    challengesCreated: 18,
    votesGiven: 285,
  },
  {
    rank: 3,
    username: "Sara la Speedrunneuse",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    participations: 2100,
    challengesCreated: 14,
    votesGiven: 190,
  },
];

const participationItems: ClassementParticipation[] = [
  {
    rank: 1,
    challengeTitle: "Rainbow Road sans toucher le sol",
    username: "Mila la Créatrice",
    screenshot:
      "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?auto=format&fit=crop&w=800&q=80",
    votes: 375,
  },
  {
    rank: 2,
    challengeTitle: "Marathon no-death",
    username: "Noah le Stratège",
    screenshot:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    votes: 250,
  },
  {
    rank: 3,
    challengeTitle: "Mode furtif extrême",
    username: "Sara la Speedrunneuse",
    screenshot:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    votes: 205,
  },
];

function formatNumber(value: number) {
  return value >= 1000 ? `${(value / 1000).toFixed(1)}k` : String(value);
}

function buildPodiumItems(filter: ClassementType): PodiumItem[] {
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
      crownColor:
        item.rank === 1 ? "gold" : item.rank === 2 ? "silver" : "bronze",
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
      crownColor:
        item.rank === 1 ? "gold" : item.rank === 2 ? "silver" : "bronze",
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
    crownColor:
      item.rank === 1 ? "gold" : item.rank === 2 ? "silver" : "bronze",
  }));
}

export default function ClassementsPage() {
  const [activeFilter, setActiveFilter] = useState<ClassementType>(
    ClassementType.CHALLENGES,
  );
  const podiumItems = buildPodiumItems(activeFilter);

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

        <FiltresClassements
          options={filterOptions}
          active={activeFilter}
          onChange={setActiveFilter}
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
