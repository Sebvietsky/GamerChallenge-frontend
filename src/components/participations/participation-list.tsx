import InfiniteScroll from "react-infinite-scroll-component";

// COMPONENTS
import { ParticipationCard } from "./participation-card";
import { Loader } from "@/components/ui/loader";

// TYPES
import type { ParticipationItem } from "@/features/types/participation.type";

// STYLES
import { homeStyles as styles } from "@/styles/global.styles";

type ParticipationListProps = {
  participations: ParticipationItem[];
  hasMoreData?: boolean;
  loadMoreParticipations?: () => Promise<void>;
};

export function ParticipationList({
  participations,
  hasMoreData = false,
  loadMoreParticipations = async () => {},
}: ParticipationListProps) {
  return (
    <InfiniteScroll
      dataLength={participations.length}
      next={loadMoreParticipations}
      hasMore={hasMoreData}
      loader={
        <div className="flex justify-center py-4">
          <Loader variant="dots-pulse" size="sm" />
        </div>
      }
    >
      <div className={styles.gridParticipations}>
        {participations.map((participation) => (
          <ParticipationCard
            key={participation.id}
            participation={participation}
          />
        ))}
      </div>
    </InfiniteScroll>
  );
}
