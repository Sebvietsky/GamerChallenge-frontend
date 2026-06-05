export interface createChallengePayload {
  title: string,
  gameId?: string,
  description: string,
  demo: string,
  goals: string,
  difficultyId: string,
  challengeCategoryId: number[],
  hints: string,
  closesAt: string,
}