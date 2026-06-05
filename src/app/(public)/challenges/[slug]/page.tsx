import Image from "next/image"
import Link from "next/link"
import { Participation } from "@/components/common/participation/Participation";
import { formatNumber, getTextColor } from "@/lib/utils";
import { challengeDetail as styles } from "@/styles/challenge-detail";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Users, Heart, Video, Lightbulb, Trophy, User } from "lucide-react";
import { getChallengeBySlug, getParticipationsByChallenge } from "@/features/api/challenge.api";
import { LikeButton, FavoriteButton } from "@/components/common/challenge-detail/ButtonLike";



interface ChallengeDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ChallengeDetailPage({
  params
}: ChallengeDetailPageProps) {
  const { slug } = await params;
  const data = await getChallengeBySlug(slug)
  const like = {isLiked: false}
  const participations = await getParticipationsByChallenge(slug)

  if(!data) {
    return null
  }

  return (
    <div className={styles.main}>
      {/* SECTION haut de page : Image, titre,...  */}
      <section className={styles.sectionDetail}>
        <div className={styles.detailContainer}>
          <div className={styles.imageContainer}>
            <Image className={styles.imageTag} src={data.game.coverUrl || "/images/image-not-found.png"} width={10000} height={10000} alt="Image du jeu"/>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.tagContainer}>
              <p className={styles.tag} style={{backgroundColor: data.challengeCategory.colorCode,color: getTextColor(data.challengeCategory.colorCode)}}>{data.challengeCategory.name}</p>
              <p className={styles.tag} style={{backgroundColor: data.difficulty.colorCode, color: getTextColor(data.difficulty.colorCode)}}>{data.game.name}</p>
            </div>
            <h1 className={styles.title}>{data.game.name} - {data.title}</h1>
            <div className={styles.dataContainer}>
              <p className={styles.dataStat}><Users className={styles.icon} />{" "}{formatNumber(data._count.participations)}{" "}{data._count.participations > 1 ?("participants"):("participant")}</p>
              <p className={styles.dataStat}><Heart className={styles.icon} />{" "}{formatNumber(data._count.votes)}{" "}{data._count.votes > 1 ?(" votes"):(" vote")} </p>
            </div>
            <p className={styles.description}>{data.goals}</p>
          </div>
        </div>
        <div className={styles.buttonContainer}>
        <LikeButton 
          slug={slug}
          initialLiked={like.isLiked}
          initialCount={data._count.votes}
        />
        <FavoriteButton 
          slug={slug}
          initialLiked={like.isLiked}
          initialCount={data._count.favoritedBy}
        />
        </div>
        {/* SECTION Vidéo, Créé par and Indice */}
      </section>
      <section className={styles.sectionGrid}>
        <div className={styles.videoContainer}>
          <h2 className={styles.videoTitle}><Video />{' '}Démonstration</h2>
          {/* TODO changer par nos vidéo de démonstration */}
          {/* <video className="styles.iframe" controls>
            <source src={data.demo}/>
          </video> */}
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
              <AvatarImage src={data.user.profilePicture || undefined} alt="Image de profil du Créateur du chalenge"/>
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
            <div className={styles.creatorInfo}>
              <p className={styles.creatorName}>{data.user.username}</p>
              <p className={styles.creatorRole}>Créateur de {data._count.participations > 1 ? ("challenges") : ("challenge")}</p>
              <p className={styles.creatorStat}><Trophy className={styles.creatorStatIcon} />{"!Todo"}{formatNumber(data._count.favoritedBy)}{" "}{data._count.favoritedBy > 1 ? ("challenges créés") : ("challenge créé")} </p>
              <p className={styles.creatorStat}><Users className={styles.creatorStatIcon} />{formatNumber(data._count.participations)}{" "}{data._count.participations > 1 ? ("participants") : ("participant")} </p>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION Participation */}
      <Participation challenge={data} participations={participations ?? []}/>
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h3 className={styles.ctaTitle}>Prêt à relever le défi ?</h3>
          <p className={styles.ctaSubtitle}>Partagez votre meilleure performance et affronter la communauté !</p>
        </div>
        <div className="w-full lg:w-[80%]">
          <Link href={`/participate?slug=${slug}`}>
            <Button className={styles.ctaButton}>Participer au challenge</Button>
          </Link>
        </div>
      </section>
      
    </div>
  );
}