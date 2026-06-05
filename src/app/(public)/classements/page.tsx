"use client";

import { ArrowRight, Sparkles, Trophy, Users } from "lucide-react";

import { ClassementPodium } from "@/components/classements/classement-podium";
import { FiltersClassements } from "@/components/classements/filters-classements";

import { useClassements } from "@/features/hooks/useClassements";

import {
  mapChallenges,
  mapParticipations,
  mapUsers,
} from "@/lib/classement.mapper";

import { buildPodiumItems } from "@/lib/classement.utils";

import { classementsStyles as styles } from "@/styles/classements.styles";
import { ClassementType } from "@/features/types/classements.type";

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

export default function ClassementsPage() {
  // ==================================================
  // RÉCUPÉRATION DES DONNÉES
  // ==================================================
  const { filter, setFilter, users, challenges, participations, isLoading } =
    useClassements();

  // ==================================================
  // MAPPING
  // ==================================================
  const utilisateurItems = mapUsers(users);

  const challengeItems = mapChallenges(challenges);

  const participationItems = mapParticipations(participations);

  // ==================================================
  // CONSTRUCTION DU PODIUM
  // ==================================================
  const podiumItems = buildPodiumItems(
    filter,
    utilisateurItems,
    challengeItems,
    participationItems,
  );

  // ==================================================
  // LOADING
  // ==================================================
  if (isLoading) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <p>Chargement...</p>
        </div>
      </div>
    );
  }

  // ==================================================
  // RENDER
  // ==================================================
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.sectionTitle}>Les Classements</h1>
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
