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
