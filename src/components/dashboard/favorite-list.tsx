import InfiniteScroll from "react-infinite-scroll-component";

// COMPONENTS
import { ChallengeCard } from "../home/challenge-card";
import { Loader } from "../ui/loader";

// TYPE
import type { ChallengeItem } from "@/features/types/challenge.type";

// STYLE
import { homeStyles as styles } from "@/styles/global.styles";

type FavoriteChallengeListProps = {
  favoriteChallenges: ChallengeItem[];
  hasMoreData?: boolean;
  loadMoreChallenges?: () => Promise<void>;
};

export function FavoriteList({
  favoriteChallenges,
  hasMoreData = false,
  loadMoreChallenges = async () => {},
}: FavoriteChallengeListProps) {
  return favoriteChallenges.length > 0 ? (
    <InfiniteScroll
      dataLength={favoriteChallenges.length}
      next={loadMoreChallenges}
      hasMore={hasMoreData}
      loader={
        <div className="flex justify-center py-4">
          <Loader variant="dots-pulse" size="sm" />
        </div>
      }
    >
      <div className={styles.gridChallenges}>
        {favoriteChallenges.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </InfiniteScroll>
  ) : (
    <p>Vous n&apos;avez aucun challenge favoris.</p>
  );
}
