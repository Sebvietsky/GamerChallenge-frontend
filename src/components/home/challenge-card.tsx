import Image from "next/image"
import { Users, Heart } from "lucide-react";
import { homeStyles as styles } from "@/styles/global.styles";

export function ChallengeCard() {
  const game = {name: "Dragon's Dogma"}
  const challenge = {participations: 257, votes: 112}

  return (
    <div className={styles.cardContainer}>
    <Image src="/images/urDragon.webp" width={1000} height={1000} alt={`Image du jeu ${game.name}`} loading="lazy" className={styles.imageCard} ></Image>
    <div className={styles.detailContainer}>
      <div id="tag" className={styles.titleCard}>
        <p className="bg-brand-success self-center text-text p-0.5 rounded">speedrun</p>
        <h3 className="font-sans self-center bg-brand-gold text-text rounded p-0.5">{game.name}</h3>
      </div>
        <h3 className={styles.challengeTitle}>Tue le Ur'dragon en moins de 5 secondes</h3>
      <div className={styles.statsContainer}>
        <p className={styles.stats}><Users />{challenge.participations}</p>
        <p className={styles.stats}><Heart />{challenge.votes}</p>
      </div>
    </div>
    </div>
  );
}
