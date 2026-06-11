interface User {
  username: string;
  country: string;
  profilePicture: string;
  _count: {
    participations: number;
  };
  challenges: {
    _count: {
      votes: number;
      participations: number;
    };
  }[];
  participations: {
    _count: {
      votes: number;
    };
  }[];
}

export interface Challenge {
  id: number;
  title: string;
  slug: string;
  description: string;
  closesAt: string | null;
  createdAt: string;
  status: string;
  demo?: string;
  hints: string;
  goals: string;

  game: {
    name: string;
    studio: string | null;
    platform: string | null;
    coverUrl: string;
    bannerUrl: string;
    categories: string[];
  };

  challengeCategory: {
    id: number;
    name: string;
    colorCode: string;
  };

  difficulty: {
    id: number;
    name: string;
    colorCode: string;
  };

  user: User;

  _count: {
    participations: number;
    favoritedBy: number;
    votes: number;
  };
}

export interface EasterEggChallenge extends Omit<Challenge, "id" | "slug"> {
  id: "easter_egg";
  slug: "easter_egg";
  isEasterEgg: true;
}

export type ChallengeItem = Challenge | EasterEggChallenge;

export function isEasterEggChallenge(
  challenge: ChallengeItem,
): challenge is EasterEggChallenge {
  return challenge.id === "easter_egg";
}

export interface Participation {
  id: number;
  video: string;
  title: string;
  slug: string;
  description: string;
  status: string;
  visibility: boolean;
  createdAt: Date;
  user: User;
  _count: {
    votes: number;
  };
  challenge: Challenge
}

export interface queryParams {
  page?: number;
  limit?: number;
  orderBy?: OrderBy | undefined;
  sort?: "asc" | "desc";
  since?: "1w" | "1m" | "3m" | "6m" | "1y" | undefined;
  categories?: CategoryName[] | undefined;
  difficulties?: DifficultyName[] | undefined;
  search?: string;
}

export enum DifficultyName {
  easy = "Facile",
  medium = "Moyen",
  hard = "Difficile",
  expert = "Expert",
  legendary = "Légendaire",
}

export enum CategoryName {
  speedrun = "Speedrun",
  noHit = "No Hit",
  scoreAttack = "Score Attack",
  cosplayRun = "Cosplay Run",
  creativity = "Créativité",
  pvp = "PvP",
  coop = "Coopératif",
  lowPercent = "Low%",
}

export enum OrderBy {
  createdAt = "createdAt",
  title = "title",
  closesAt = "closesAt",
  status = "status",
  participations = "participations",
  votes = "votes",
  difficulty = "difficulty",
}

export enum Sort {
  asc = "asc",
  desc = "desc",
}

export interface LikedAndFavoriteChallenge {
  id: number;
  slug: string;
  visibility: boolean;
}
