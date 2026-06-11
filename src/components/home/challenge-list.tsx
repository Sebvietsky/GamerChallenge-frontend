import InfiniteScroll from "react-infinite-scroll-component";

// COMPONENTS
import { ChallengeCard } from "./challenge-card";
import { Loader } from "@/components/ui/loader";

// TYPES
import type { ChallengeItem } from "@/features/types/challenge.type";
import { isEasterEggChallenge } from "@/features/types/challenge.type";

// STYLES
import { homeStyles as styles } from "@/styles/global.styles";

type ChallengeListProps = {
  challenges: ChallengeItem[];
  onChallengeClick?: (challenge: ChallengeItem) => void;
  hasMoreData?: boolean;
  loadMoreChallenges?: () => Promise<void>;
};

export function ChallengeList({
  challenges,
  onChallengeClick,
  hasMoreData = false,
  loadMoreChallenges = async () => {},
}: ChallengeListProps) {
  return (
    <InfiniteScroll
      dataLength={challenges.length}
      next={loadMoreChallenges}
      hasMore={hasMoreData}
      loader={
        <div className="flex justify-center py-4">
          <Loader variant="dots-pulse" size="sm" />
        </div>
      }
    >
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
    </InfiniteScroll>
  );
}
