export interface EditChallengePayload {
  title: string;
  description: string;
  demo?: string;
  goals?: string;
  difficultyId: number;
  challengeCategoryId: number;
  hints?: string[];
  status?: string;
  closesAt?: Date;
}

export interface CreateChallengePayload extends EditChallengePayload {
  igdbId: number;
}

export interface CreateParticipationPayload {
  title: string;
  description: string;
  video: string;
}
