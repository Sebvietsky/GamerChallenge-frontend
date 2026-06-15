export type DashBoardContentCardProps = {
  href: string;
  image: string | null;
  game: string;
  title: string;
  votes: number;
  participations?: number;
  badge?: string;
};

export type DashboardChallenge = {
  id: number;
  title: string;
  slug: string;
  status: string;
  createdAt: string | Date;

  game: {
    name: string;
    coverUrl: string | null;
  };

  _count: {
    votes: number;
    participations: number;
  };
};

export type DashboardParticipation = {
  title: string;
  slug: string | null;
  status: string;
  video: string;

  challenge: {
    game: {
      name: string;
      coverUrl: string | null;
    };
  };

  _count: {
    votes: number;
  };
};
