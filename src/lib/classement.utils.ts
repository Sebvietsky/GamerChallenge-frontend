import {
  ClassementType,
  ClassementChallenge,
  ClassementParticipation,
  ClassementUser,
  PodiumItem,
} from "@/features/types/classements.type";

function formatNumber(value: number) {
  return value >= 1000 ? `${(value / 1000).toFixed(1)}k` : String(value);
}

export function buildPodiumItems(
  filter: ClassementType,
  users: ClassementUser[],
  challenges: ClassementChallenge[],
  participations: ClassementParticipation[],
): PodiumItem[] {
  switch (filter) {
    case ClassementType.UTILISATEURS:
      return users.map((item) => ({
        rank: item.rank,
        title: item.username,
        subtitle: `Actif · ${item.challengesCreated} créations`,
        image: item.avatar,
        tags: ["Utilisateur", "Actif"],
        stats: [
          {
            value: formatNumber(item.participations),
            label: "Participations",
          },
          {
            value: formatNumber(item.votesGiven),
            label: "Votes donnés",
          },
          {
            value: `${item.challengesCreated} créations`,
            label: "Créations",
          },
        ],
        crownColor: "gold",
        laurelsColor: "gold",
      }));

    case ClassementType.PARTICIPATIONS:
      return participations.map((item) => ({
        rank: item.rank,
        title: item.challengeTitle,
        subtitle: `Par ${item.username}`,
        image: item.screenshot,
        tags: ["Participation", item.username],
        stats: [
          {
            value: formatNumber(item.votes),
            label: "Votes",
          },
          {
            value: `${item.rank} ✔`,
            label: "Position",
          },
          {
            value: item.challengeDifficulty,
            label: "Difficulté",
          },
        ],
        crownColor: "gold",
        laurelsColor: "gold",
      }));

    default:
      return challenges.map((item) => ({
        rank: item.rank,
        title: item.title,
        subtitle: item.game,
        image: item.image,
        tags: [item.game, "Challenge"],
        stats: [
          {
            value: formatNumber(item.participations),
            label: "Participations",
          },
          {
            value: formatNumber(item.votes),
            label: "Votes",
          },
          {
            value: item.challengeDifficulty,
            label: "Difficulté",
          },
        ],
        crownColor: "gold",
        laurelsColor: "gold",
      }));
  }
}
