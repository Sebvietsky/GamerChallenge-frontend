// COMPONENTS
import { ChallengeCard } from "./challenge-card";

// STYLES
import { homeStyles as styles } from "@/styles/global.styles";

export function ChallengeList() {
  return (
    <div className={styles.cardsGrid}>
      <ChallengeCard />
      <ChallengeCard />
      <ChallengeCard />
    </div>
  );
}
