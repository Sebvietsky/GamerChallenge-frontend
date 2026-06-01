export enum ClassementType {
  CHALLENGES = "challenges",
  UTILISATEURS = "utilisateurs",
  PARTICIPATIONS = "participations",
}

export type ClassementChallenge = {
  rank: number;
  title: string;
  game: string;
  image: string;
  participations: number;
  votes: number;
  duration: string;
};

export type ClassementUser = {
  rank: number;
  username: string;
  avatar: string;
  participations: number;
  challengesCreated: number;
  votesGiven: number;
};

export type ClassementParticipation = {
  rank: number;
  challengeTitle: string;
  username: string;
  screenshot: string;
  votes: number;
};

export type PodiumItem = {
  rank: number;
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  stats: Array<{ value: string; label: string }>;
  crownColor: "gold" | "silver" | "bronze";
};
