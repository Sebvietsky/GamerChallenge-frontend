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

  user: {
    username: string;
    country: string | null;
    profilePicture: string | null;
  };

  _count: {
    participations: number;
    favoritedBy: number;
    votes: number;
  };
}

export interface Participation {
  id: number;
  challenge: {
    game: {
      coverUrl: string;
    };
  };
  video: { url: string };
  title: string;
  slug: string;
  description?: string;
  status: string;
  rejectedReason?: string;
  visibility: boolean;
  createdAt: string;
  user: {
    country: string;
    profilePicture: { url: string };
    username: string;
  };
  _count: {
    votes: number;
  };
}

export interface queryParams {
  page?: number;
  limit?: number;
  orderBy?: OrderBy | undefined;
  sort?: "asc" | "desc";
  since?: "1w" | "1m" | "3m" | "6m" | "1y" | undefined;
  search?: string;
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
