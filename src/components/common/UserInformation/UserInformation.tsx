import { challengeDetail as styles } from "@/styles/challenge-detail.styles";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Challenge, Participation } from "@/features/types/challenge.type";
import { User, Trophy, Users } from "lucide-react";

import { formatNumber } from "@/lib/utils";

interface UserInformationProps {
  data:  Challenge | Participation
}

export function UserInformation({ data }: UserInformationProps) {
  return(
    <>
      <h2 className={styles.creatorTitle}>Créé par</h2>
      <div className={styles.creatorContent}>
        <Avatar className={styles.avatar}>
          <AvatarImage
            src={data.user.profilePicture || undefined}
            alt="Image de profil du Créateur du chalenge"
          />
          <AvatarFallback>
            <User />
          </AvatarFallback>
        </Avatar>
        <div className={styles.creatorInfo}>
          <p className={styles.creatorName}>{data.user.username}</p>
          <p className={styles.creatorRole}>
            Créateur de{" "}
            {/*TODO A modifier par les datas du créateur */}
            {/* {data._count.participations > 1 ? "challenges" : "challenge"} */}
          </p>
          <p className={styles.creatorStat}>
            <Trophy className={styles.creatorStatIcon} />
            {/* {formatNumber(data._count.favoritedBy)}{" "} */}
            {/* {data._count.favoritedBy > 1 */}
              ? "challenges créés"
              {/* : "challenge créé"}{" "} */}
          </p>
          <p className={styles.creatorStat}>
            <Users className={styles.creatorStatIcon} />
            {/* {formatNumber(data._count.participations)}{" "} */}
            {/* {data._count.participations > 1 */}
            {/* ? "participants" */}
            {/* : "participant"}{" "} */}
          </p>
        </div>
      </div>
    </>

  )
}