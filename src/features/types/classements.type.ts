export enum ClassementType {
  CHALLENGES = "challenges",
  UTILISATEURS = "users",
  PARTICIPATIONS = "participations",
}

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
  laurelsColor: "gold" | "silver" | "bronze";
  tags: string[];
  stats: PodiumStat[];
}

export interface ClassementChallenge {
  rank: number;
  title: string;
  game: string;
  image: string;
  participations: number;
  votes: number;
  challengeDifficulty: string;
}

export interface ClassementUser {
  rank: number;
  username: string;
  avatar: string;
  participations: number;
  challengesCreated: number;
  votesGiven: number;
}

export interface ClassementParticipation {
  rank: number;
  challengeTitle: string;
  username: string;
  screenshot: string;
  votes: number;
  challengeDifficulty: string;
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
  game: {
    name: string;
    coverUrl: string | null;
  };
  _count: {
    participations: number;
    votes: number;
  };
  difficulty: {
    name: string;
  };
}

export interface MostAppreciatedParticipation {
  title: string;
  user: {
    username: string;
    profilePicture: string | null;
  };

  challenge: {
    title: string;
    game: {
      coverUrl: string | null;
    };
    difficulty: {
      name: string;
    };
  };

  _count: {
    votes: number;
  };
}

export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}
