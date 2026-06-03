import Image from "next/image"
import { formatNumber } from "@/lib/utils"

import { participationCardStyles as styles } from "./ParticipationCard-styles"
import { Heart, MessageSquare } from "lucide-react"
import { Participation } from "@/features/types/challenge.type"

interface ParticipationCardProps {
  className?: string
  data: Participation
}

export function ParticipationCard({className, data}: ParticipationCardProps){
  return(
    <li className={className}>
      <div className={styles.infoContainer}>
        <Image src={data.challenge.game.coverUrl} width={100} height={100} alt="Image de participations"/>
        <div>
          <h3 className="font-semibold">{data.title}</h3>
          <p className="text-text-soft">{data.user.username}</p>
        </div>
      </div>
      <div className="*:flex *:items-center *:gap-1">
        <p><Heart /> {formatNumber(data._count.votes)}</p>
      </div>
    </li>
  )
}