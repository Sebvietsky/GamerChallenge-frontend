import Image from "next/image"
import Link from "next/link"
import { formatNumber } from "@/lib/utils"

import { participationCardStyles as styles } from "./ParticipationCard-styles"
import { challengeDetail as stylesList } from "@/styles/challenge-detail";

import { Heart } from "lucide-react"
import { Challenge, Participation } from "@/features/types/challenge.type"

interface ParticipationCardProps {
  data: Participation
  challenge: Challenge
}

export function ParticipationCard({data, challenge}: ParticipationCardProps){
  console.log(data)

  return(
    <li className="flex flex-col w-full items-center">
      <Link href={`/participation/${data.slug}`} className={stylesList.participationCard}>
        <div className={styles.infoContainer}>
          <Image src={challenge.game.coverUrl || "/images/image-not-found"} width={100} height={100} alt="Image de participations" className={styles.image}/>
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