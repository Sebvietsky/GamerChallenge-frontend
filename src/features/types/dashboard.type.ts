import type { Challenge } from "@/features/types/challenge.type";

export type DashboardResponse = {
  totalParticipation: number;
  totalChallengeCreated: number;
  totalChallengeUserVoted: number;
  totalParticipationUserVoted: number;
  totalvote: number;
  totalVoteReceivedOnChallenge: number;
  totalVoteReceivedOnParticipation: number;

  mostLikedChallenge: Challenge | null;
  mostLikedParticipation: {
    id: number;
    slug: string;
    title: string;
    description: string;
    video: string;
    votes: number;
    createdAt: string;
  } | null;
};

export type DashboardModelView = {
  reputation: number;

  level: string;
  nextLevel: string | null;
  nextLevelStep: number | null;
  pointsToNextLevel: number;
  progressPercent: number;

  stats: {
    challenges: number;
    participations: number;
    votesReceived: number;
    votesGiven: number;
    totalActivity: number;
    totalContribution: number;
  };

  hallOfFame: {
    challenge: DashboardResponse["mostLikedChallenge"];
    participation: DashboardResponse["mostLikedParticipation"];
  };
};

export interface queryParams {
  page?: number;
  limit?: number;
}
