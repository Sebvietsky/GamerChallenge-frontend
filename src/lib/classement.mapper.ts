import {
  ClassementChallenge,
  ClassementParticipation,
  ClassementUser,
} from "@/features/types/classements.type";

import {
  MostActiveUser,
  MostAppreciatedParticipation,
  MostPlayedChallenge,
} from "@/features/types/classements.type";

export function mapUsers(users: MostActiveUser[]): ClassementUser[] {
  return users.map((user, index) => ({
    rank: index + 1,
    username: user.username,
    avatar: user.profilePicture ?? "/default-avatar.png",
    participations: user.participationCount,
    challengesCreated: user.challengeCount,
    votesGiven: user.totalActivity,
  }));
}

export function mapChallenges(
  challenges: MostPlayedChallenge[],
): ClassementChallenge[] {
  return challenges.map((challenge, index) => ({
    rank: index + 1,
    title: challenge.title,
    game: challenge.game?.name ?? "Jeu inconnu",
    image: challenge.game?.coverUrl ?? "/default-challenge.jpg",
    participations: challenge._count?.participations ?? 0,
    votes: challenge._count?.votes ?? 0,
    challengeDifficulty: challenge.difficulty.name ?? 0,
  }));
}

export function mapParticipations(
  participations: MostAppreciatedParticipation[],
): ClassementParticipation[] {
  return participations.map((participation, index) => ({
    rank: index + 1,
    challengeTitle: participation.challenge?.title ?? "Participation",
    username: participation.user?.username ?? "Utilisateur",
    screenshot:
      participation.challenge?.game?.coverUrl ?? "/default-participation.jpg",
    votes: participation._count?.votes ?? 0,
  }));
}
