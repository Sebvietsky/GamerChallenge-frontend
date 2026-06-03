export interface Challenge {
  id: number;
  title: string;
  slug: string;

  closesAt: string | null;
  createdAt: string;
  status: string;

  game: {
    name: string;
    studio: string | null;
    platform: string | null;
    coverUrl: string;
    screenshots: string[];
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
  challenge: {
    game: {
      coverUrl: {url: string};
    }
  }
  id: number;
  video: {url: string};
  title: string;
  slug: string;
  description?: string;
  status: string;
  rejectedReason?: string;
  visibility: boolean;
  createdAt: string;
  user: {
    country: string;
    profilePicture: {url: string}
    username: string;
  }
  _count: {
    votes: number;
  }
}
