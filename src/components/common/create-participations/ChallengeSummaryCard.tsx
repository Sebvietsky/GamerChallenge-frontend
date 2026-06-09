import Image from "next/image";

import { ChevronsDown } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { participateStyles as styles } from "@/styles/participate.styles";
import { Challenge } from "@/features/types/challenge.type";

type ChallengeSummaryCardProps = {
  challenge: Challenge;
};

export default function ChallengeSummaryCard({
  challenge,
}: ChallengeSummaryCardProps) {
  return (
    <Card className={styles.challengeCard}>
      <div className={styles.challengeHeader}>
        <ChevronsDown />
        <h2 className={styles.challengeTitle}>Participation au challenge</h2>
        <ChevronsDown />
      </div>

      <div className={styles.challengeContent}>
        <div className={styles.challengeImage}>
          <Image
            src={challenge.game.coverUrl ?? "/images/image-not-found.png"}
            alt={challenge.title}
            fill
            className="object-cover"
          />
        </div>

        <div className={styles.challengeInfo}>
          <h3 className={styles.challengeName}>{challenge.title}</h3>

          <p className={styles.challengeGame}>{challenge.game.name}</p>

          <Badge className={styles.difficultyBadge}>
            {challenge.difficulty.name}
          </Badge>
        </div>
      </div>
    </Card>
  );
}
