export interface createChallengePayload {
  title: string,
  gameId?: string,
  description: string,
  goals: string,
  difficultyId: string,
  categoryId: string[],
  hints: string,
}