export interface createChallengePayload {
  title: string,
  igdbId: number,
  description: string,
  demo?: string,
  goals?: string,
  difficultyId: number,
  challengeCategoryId: number,
  hints?: string,
  status?: string,
  closesAt?: Date,
}