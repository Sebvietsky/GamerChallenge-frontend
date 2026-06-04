import Image from "next/image"
import Link from "next/link"
import { formatNumber } from "@/lib/utils"

import { participationCardStyles as styles } from "./ParticipationCard-styles"
import { Heart, MessageSquare } from "lucide-react"
import { Challenge, Participation } from "@/features/types/challenge.type"

interface ParticipationCardProps {
  className?: string
  data: Participation
  challenge: Challenge
}

export function ParticipationCard({className, data, challenge}: ParticipationCardProps){
  console.log(data)

  return(
    <li className={className}>
      <Link href={`/participation/${data.slug}`}>
        <div className={styles.infoContainer}>
          <Image src={challenge.game.coverUrl || "/images/image-not-found"} width={100} height={100} alt="Image de participations"/>
          <div>
            <h3 className="font-semibold">{data.title}</h3>
            <p className="text-text-soft">{data.user.username}</p>
          </div>
        </div>
        <div className="*:flex *:items-center *:gap-1">
          <p><Heart /> {formatNumber(data._count.votes)}</p>
        </div>
      </Link>
    </li>
  )
}