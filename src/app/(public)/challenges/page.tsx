import { ChallengeList } from "@/components/home/challenge-list";
import { getChallenges } from "@/features/api/challenge.api";

export default async function ChallengesPage() {
  const challenges = await getChallenges()
  console.log("Challenges: ",challenges)
  
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold">Challenges</h1>
        <p className="text-text-soft">
          Browse and participate in gaming challenges
        </p>
      </div>
      <ChallengeList challenges={challenges}/>
    </div>
  );
}
