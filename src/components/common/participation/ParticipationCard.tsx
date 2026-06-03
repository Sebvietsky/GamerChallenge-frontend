import Image from "next/image"
import { formatNumber } from "@/lib/utils"

import { participationCardStyles as styles } from "./ParticipationCard-styles"
import { Heart, MessageSquare } from "lucide-react"

interface ParticipationCardProps {
  className?: string
}

export function ParticipationCard({className}: ParticipationCardProps){
  return(
    <li className={className}>
      <div className={styles.infoContainer}>
        <Image src="/images/image-not-found.png" width={100} height={100} alt="Image de participations"/>
        <div>
          <h3 className="font-semibold">Title Participation</h3>
          <p className="text-text-soft">username Participant</p>
        </div>
      </div>
      <div className="*:flex *:items-center *:gap-1">
        <p><Heart /> {formatNumber(1200)}</p>
      </div>
    </li>
  )
}