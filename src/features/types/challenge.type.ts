export interface Challenge {
  id: number;
  title: string;
  slug: string;

  closesAt: string | null;

  status: string;

  game: {
    name: string;
    studio: string | null;
    platform: string | null;
    coverUrl: string | null;
  };

  challengeCategory: {
    id: number;
    name: string;
    colorCode: string | null;
  };

  difficulty: {
    id: number;
    name: string;
    colorCode: string | null;
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
