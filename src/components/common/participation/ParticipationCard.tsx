import Image from "next/image";
import Link from "next/link";
import { formatNumber } from "@/lib/utils";

import { challengeDetail as heriteStyles } from "@/styles/challenge-detail.styles";
import { participationCardStyles as styles } from "./ParticipationCard-styles";
import { Heart } from "lucide-react";
import { ChallengeItem, Participation } from "@/features/types/challenge.type";

interface ParticipationCardProps {
  data: Participation;
  challenge: ChallengeItem;
}

export function ParticipationCard({
  data,
  challenge,
}: ParticipationCardProps) {
  return (
    <li className="w-full flex justify-center">
      <Link href={`/participations/${data.slug}`} className={heriteStyles.participationCard}>
        <div className={styles.infoContainer}>
          <Image
            src={challenge.game.coverUrl || "/images/image-not-found"}
            width={100}
            height={100}
            alt="Image de participations"
          />
          <div>
            <h3 className="font-semibold">{data.title}</h3>
            <p className="text-text-soft">{data.user.username}</p>
          </div>
        </div>
        <div className="*:flex *:items-center *:gap-1">
          <p>
            <Heart /> {formatNumber(data._count.votes)}
          </p>
        </div>
      </Link>
    </li>
  );
}
