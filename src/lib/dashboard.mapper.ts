import {
  DashboardModelView,
  DashboardResponse,
} from "@/features/types/dashboard.type";

export function mapDashboardData(data: DashboardResponse): DashboardModelView {
  const votesReceived =
    data.totalVoteReceivedOnChallenge + data.totalVoteReceivedOnParticipation;

  const votesGiven =
    data.totalChallengeUserVoted + data.totalParticipationUserVoted;

  const totalContribution =
    data.totalChallengeCreated + data.totalParticipation;

  const totalActivity = votesGiven + votesReceived;

  const reputation =
    data.totalChallengeCreated * 50 +
    data.totalParticipation * 20 +
    votesReceived * 10 +
    votesGiven;

  const levels = [
    { name: "Novice 🌱", min: 0 },
    { name: "Challenger 🥉", min: 100 },
    { name: "Compétiteur 🥈", min: 500 },
    { name: "Vétéran 🥇", min: 1000 },
    { name: "Maître des challenges 🏅", min: 2500 },
    { name: "Légende 👑", min: 5000 },
    { name: "L'Innarêtable ♾️", min: 15000 },
    { name: "L'Élu 🔱", min: 50000 },
  ];

  const currentLevel =
    [...levels].reverse().find((level) => reputation >= level.min) ?? levels[0];
  const nextLevel = [...levels].find((level) => level.min > reputation) ?? null;
  const nextLevelStep = nextLevel?.min ?? null;
  const pointsToNextLevel = nextLevelStep ? nextLevelStep - reputation : 0;
  const progressPercent = nextLevel
    ? ((reputation - currentLevel.min) / (nextLevel.min - currentLevel.min)) *
      100
    : 100;

  return {
    reputation,

    level: currentLevel.name,
    nextLevel: nextLevel?.name ?? null,
    nextLevelStep,
    pointsToNextLevel,
    progressPercent,

    stats: {
      challenges: data.totalChallengeCreated,
      participations: data.totalParticipation,
      votesReceived,
      votesGiven,
      totalActivity,
      totalContribution,
    },

    hallOfFame: {
      challenge: data.mostLikedChallenge,
      participation: data.mostLikedParticipation,
    },
  };
}
