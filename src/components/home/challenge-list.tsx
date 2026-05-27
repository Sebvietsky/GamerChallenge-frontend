// COMPONENTS
import { ChallengeCard } from "./challenge-card";

// STYLES
import { homeStyles as styles } from "@/components/common/styles/home.styles";

export function ChallengeList() {
  return (
    <div className={styles.cardsGrid}>
      <ChallengeCard />
      <ChallengeCard />
      <ChallengeCard />
    </div>
  );
}
