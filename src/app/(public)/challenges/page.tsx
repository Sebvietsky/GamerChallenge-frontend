import { ChallengesPageClient } from "@/components/challenges/challenges-page-client";

export default async function ChallengesPage() {
  return (
    <div className="space-y-8 p-8">
      <div className="flex-1 lg:ml-64 pt-20">
        <h1 className="text-3xl font-bold">Les Challenges</h1>
      </div>
      <ChallengesPageClient />
    </div>
  );
}
