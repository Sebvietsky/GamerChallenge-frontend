import { tagStyles as styles } from "./tag-container.styles";
import { getTextColor } from "@/lib/utils";
import { ChallengeItem } from "@/features/types/challenge.type";

interface TagProps {
  data: ChallengeItem;
}

export function TagContainer({ data }: TagProps) {
  return (
    <div className={styles.tagContainer}>
      <p
        className={styles.tag}
        style={{
          backgroundColor: data.challengeCategory.colorCode,
          color: getTextColor(data.challengeCategory.colorCode),
        }}
      >
        {data.challengeCategory.name}
      </p>
      <p
        className={styles.tag}
        style={{
          backgroundColor: data.difficulty.colorCode,
          color: getTextColor(data.difficulty.colorCode),
        }}
      >
        {data.difficulty.name}
      </p>
    </div>
  );
}
