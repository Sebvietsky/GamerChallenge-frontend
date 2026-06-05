import { ChallengeList } from "@/components/home/challenge-list";
import { getChallenges } from "@/features/api/challenge.api";
import type { queryParams } from "@/features/types/challenge.type";

export default async function ChallengesPage({
  page = 1,
  limit = 50,
  orderBy = "createdAt",
  sort = "asc",
  since = undefined,
}: queryParams) {
  const challenges = await getChallenges({
    page: page,
    limit: limit,
    orderBy: orderBy,
    sort,
    since,
  });
  console.log("Challenges: ", challenges);

  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold">Les Challenges</h1>
      </div>
      <ChallengeList challenges={challenges} />
    </div>
  );
}
