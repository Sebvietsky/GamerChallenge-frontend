export type ClassementType = "challenges" | "participations" | "users";

export interface PodiumStat {
  label: string;
  value: string | number;
}

export interface PodiumItem {
  rank: number;
  image: string;
  title: string;
  subtitle: string;
  crownColor: "gold" | "silver" | "bronze";
  tags: string[];
  stats: PodiumStat[];
}

export interface MostActiveUser {
  id: number;
  username: string;
  country: string | null;
  profilePicture: string | null;
  participationCount: number;
  challengeCount: number;
  totalActivity: number;
}

export interface MostPlayedChallenge {
  id: number;
  title: string;
  slug: string;
  votesCount: number;
  participationsCount: number;
}

export interface MostAppreciatedParticipation {
  id: number;
  description: string;
  votesCount: number;
  challengeTitle: string;
  authorUsername: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}
