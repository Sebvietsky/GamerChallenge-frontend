// COMPONENTS
import { ChallengeCard } from "./challenge-card";

// TYPES
import type { Challenge } from "@/features/types/challenge.type";

// STYLES
import { homeStyles as styles } from "@/styles/global.styles";

type ChallengeListProps = {
  challenges: Challenge[];
};

export function ChallengeList({ challenges }: ChallengeListProps) {
  return (
    <>
      <div className={styles.gridChallenges}>
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </>
  );
}
