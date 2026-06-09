// COMPONENTS
import { ChallengeCard } from "./challenge-card";

// TYPES
import type { ChallengeItem } from "@/features/types/challenge.type";
import { isEasterEggChallenge } from "@/features/types/challenge.type";

// STYLES
import { homeStyles as styles } from "@/styles/global.styles";

type ChallengeListProps = {
  challenges: ChallengeItem[];
  onChallengeClick?: (challenge: ChallengeItem) => void;
};

export function ChallengeList({
  challenges,
  onChallengeClick,
}: ChallengeListProps) {
  return (
    <>
      <div className={styles.gridChallenges}>
        {challenges.map((challenge) => (
          <ChallengeCard
            key={challenge.id}
            challenge={challenge}
            onClick={
              isEasterEggChallenge(challenge) ? onChallengeClick : undefined
            }
          />
        ))}
      </div>
    </>
  );
}
