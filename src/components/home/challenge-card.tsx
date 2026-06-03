"use client"

import Image from "next/image"
import Link from "next/link"
import { Users, Heart, ChevronRight } from "lucide-react";
import { homeStyles as styles } from "@/styles/global.styles";
import { Button } from "../ui/button";

import { Challenge } from "@/features/types/challenge.type";

export function ChallengeCard({challenge}: Challenge) {  

  return (
    <div className={styles.cardContainer}>
      {/* TODO à verifier les nom envoyer par le bakc pour l'affichage des valeurs */}
    <Image 
      src={game.image || "/images/image-not-found.png"} 
      width={1000} 
      height={1000} 
      alt={`Image du jeu ${game.name}`} 
      loading="lazy" 
      className={styles.imageCard} 
/>
    <div className={styles.container}>
      <div className={styles.detailContainer}>
        <div id="tag" className={styles.titleCard}>
          {/* style={} sera pour integrer la couleur envoyer par le back les nom seront surement à modifier à l'integration du back */}
          <p className={styles.tag} style={{backgroundColor: game.tagColor2}}>speedrun</p>
          <h3 className={styles.tag} style={{backgroundColor: game.tagColor}}>{game.name}</h3>
        </div>
          <h3 className={styles.challengeTitle}>Tue le Ur'dragon en moins de 5 secondes</h3>
        <div className={styles.statsContainer}>
          <p className={styles.stats}><Users />{Challenge.participations}</p>
          <p className={styles.stats}><Heart />{Challenge.votes}</p>
        </div>
      </div>
        <Link href="/challenges/1">
          <Button
            size="icon"
            className="h-13 w-13 rounded-full bg-brand-secondary-light"
          >
            <ChevronRight className="size-10 text-brand-secondary" />
          </Button>
        </Link>
        
    </div>
    </div>
  );
}
