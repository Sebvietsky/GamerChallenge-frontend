import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { participateStyles as styles } from "@/styles/participate.styles";

type ChallengeSummaryCardProps = {
  title: string;
  gameName: string;
  difficulty: string;
  imageUrl: string;
};

export default function ChallengeSummaryCard({
  title,
  gameName,
  difficulty,
  imageUrl,
}: ChallengeSummaryCardProps) {
  return (
    <Card className={styles.challengeCard}>
      <div className={styles.challengeHeader}>
        <h2 className={styles.challengeTitle}>Challenge :</h2>
      </div>

      <div className={styles.challengeContent}>
        <div className={styles.challengeImage}>
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>

        <div className={styles.challengeInfo}>
          <h3 className={styles.challengeName}>{title}</h3>

          <p className={styles.challengeGame}>{gameName}</p>

          <Badge className={styles.difficultyBadge}>{difficulty}</Badge>
        </div>
      </div>
    </Card>
  );
}
