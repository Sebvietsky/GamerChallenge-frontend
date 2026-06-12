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

export type ParticipationItem = Participation;

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
  challenge: Challenge;
}

export interface queryParams {
  page?: number;
  limit?: number;
}

export interface LikedParticipation {
  id: number;
  slug: string;
  visibility: boolean;
}
