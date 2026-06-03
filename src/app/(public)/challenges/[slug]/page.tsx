import Image from "next/image"
import Link from "next/link"
import { ParticipationCard } from "@/components/common/participation/ParticipationCard";
import { formatNumber } from "@/lib/utils";

import { challengeDetail as styles } from "@/styles/challenge-detail";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Users, Heart, Video, Lightbulb, Trophy, Star, User } from "lucide-react";

interface ChallengeDetailPageProps {
  params: Promise<{ slug: string }>;
}

type ChallengeDetail = {
  slug: string;
  image?: string;
  name: string;
  title: string;
  participations: number;
  votes: number;
  created: number;
};

export default async function ChallengeDetailPage({
  params,
}: ChallengeDetailPageProps) {
  const { slug } = await params;
  const mockChallenge: ChallengeDetail = {
    slug,
    image: "/images/image-not-found.png",
    name: "Elden Ring",
    title: "No Hit Boss Run",
    participations: 1560,
    votes: 1010,
    created: 11,
  };

  const data: ChallengeDetail = mockChallenge;

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  return (
    <div className={styles.main}>
      {/* SECTION haut de page : Image, titre,...  */}
      <section className={styles.sectionDetail}>
        <div className={styles.detailContainer}>
          <div className={styles.imageContainer}>
            <Image className={styles.imageTag} src={data.image || "/images/image-not-found.png"} width={1000} height={1000} alt="Image du jeu"/>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.tagContainer}>
              <p className={styles.tag}>Speedrun</p>
              <p className={styles.tag}>Elden Ring</p>
            </div>
            <h1 className={styles.title}>{data.name} - {data.title}</h1>
            <div className={styles.dataContainer}>
              <p className={styles.dataStat}><Users className={styles.icon} />{" "}{formatNumber(data.participations)}{" "}{data.participations > 1 ?("participants"):("participant")}</p>
              <p className={styles.dataStat}><Heart className={styles.icon} />{" "}{formatNumber(data.votes)}{" "}{data.votes > 1 ?(" votes"):(" vote")} </p>
            </div>
            <p className={styles.description}>Terminez le jeu Elden Ring en battant tout les boss principaux sans subir le moindre dégât. Une prouesse de maitrise, de patiance et de stratégie.</p>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button className={styles.iconButton} >
            <Heart />
          </Button>
          <Button className={styles.iconButton}>
            <Star />
          </Button>
        </div>
        {/* SECTION Vidéo, Créé par and Indice */}
      </section>
      <section className={styles.sectionGrid}>
        <div className={styles.videoContainer}>
          <h2 className={styles.videoTitle}><Video />{' '}Démonstration</h2>
          {/* TODO changer par nos vidéo de démonstration */}
          <iframe className={styles.iframe} src="https://www.youtube.com/embed/Djtsw5k_DNc" title="ELDEN RING NIGHTREIGN – REVEAL GAMEPLAY TRAILER" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className={styles.hintsContainer}>
          <Accordion type="single" collapsible>
            <AccordionItem value="indices">
              <AccordionTrigger>
                <Lightbulb />Indices
              </AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li>Indice 1</li>
                  <li>Indice 2</li>
                  <li>Indice 3</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className={styles.creatorContainer}>
          <h2 className={styles.creatorTitle}>Créé par</h2>
          <div className={styles.creatorContent}>
            <Avatar className={styles.avatar}>
              <AvatarImage src={data.avatar} alt="Image de profil du Créateur du chalenge"/>
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
            <div className={styles.creatorInfo}>
              <p className={styles.creatorName}>Nom d'utilisateur</p>
              <p className={styles.creatorRole}>Créateur de {data.created > 1 ? ("challenges") : ("challenge")}</p>
              <p className={styles.creatorStat}><Trophy className={styles.creatorStatIcon} />{formatNumber(data.created)}{" "}{data.created > 1 ? ("challenges créés") : ("challenge créé")} </p>
              <p className={styles.creatorStat}><Users className={styles.creatorStatIcon} />{formatNumber(data.participations)}{" "}{data.participations > 1 ? ("participants") : ("participant")} </p>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION Participation */}
      <section className={styles.participationSection}>
        <div className={styles.participationHeader}>
          <h2 className={styles.participationTitle}>Participations ({formatNumber(data.participations)})</h2>
          <div className={styles.filterContainer}>
            <Button className={styles.filterButton}>Nouveautés</Button>
            <Button className={styles.filterButtonAlt}>Popularités</Button>
          </div>
        </div>
        <ul className={styles.participationList}>
          <ParticipationCard className={styles.participationCard}/>
          <ParticipationCard className={styles.participationCard}/>
          <ParticipationCard className={styles.participationCard}/>
        </ul>
      </section>
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h3 className={styles.ctaTitle}>Prêt à relever le défi ?</h3>
          <p className={styles.ctaSubtitle}>Partagez votre meilleure performance et affronter la communauté !</p>
        </div>
        <div className="w-full lg:w-[80%]">
          <Link href="/participate">
            <Button className={styles.ctaButton}>Participer au challenge</Button>
          </Link>
        </div>
      </section>
      
    </div>
  );
}