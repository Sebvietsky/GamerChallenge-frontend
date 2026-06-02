import Image from "next/image"
import Link from "next/link"
import { ParticipationCard } from "@/components/common/participation/ParticipationCard";

import { challengeDetail as styles } from "@/styles/challenge-detail";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Heart, Video, Lightbulb, Trophy, Star, ChevronRight, User } from "lucide-react";

interface ChallengeDetailPageProps {
  params: { slug: string };
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

export default function ChallengeDetailPage({
  params,
}: ChallengeDetailPageProps) {
  const { slug } = params;
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
      {/* <div className={styles.challengeDesc}> */}
      <section className="lg:flex">
        {/* className={styles.detailContainer} */}
        <div className="flex flex-col w-full gap-4">
          <div className="h-40 object-cover object-center">
            <Image className="rounded-lg w-full h-full object-fit object-center" src={data.image || "/images/image-not-found.png"} width={1000} height={1000} alt="Image du jeu"/>
          </div>
          {/* className={styles.tagContainer} */}
          <div className="flex gap-2 text-sm font-semibold">
            <p className="rounded-lg bg-brand-info px-4 py-1.5">Speedrun</p>
            <p className="rounded-lg bg-brand-info px-4 py-1.5">Elden Ring</p>
          </div>
          <h1 className="text-2xl font-semibold">{data.name} - {data.title}</h1>
          {/* className={styles.dataContainer} */}
          <div className="flex gap-4 text-text-muted">
            <p className="flex items-center"><Users className="mr-2" />{" "}{formatNumber(data.participations)}{" "}{data.participations > 1 ?("participants"):("participant")}</p>
            <p className="flex items-center"><Heart className="mr-2" />{" "}{formatNumber(data.votes)}{" "}{data.votes > 1 ?(" votes"):(" vote")} </p>
          </div>
          <p className="w-full text-text-muted">Terminez le jeu Elden Ring en battant tout les boss principaux sans subir le moindre dégât. Une prouesse de maitrise, de patiance et de stratégie.</p>
        </div>
        <div className="flex my-2 gap-1.5 justify-end px-8">
          <Button className="w-8 h-8 rounded-full" >
            <Heart />
          </Button>
          <Button className="w-8 h-8 rounded-full">
            <Star />
          </Button>
        </div>
      </section>
      <section className="">
        {/* className={styles.videoContainer} */}
        <div className="h-fit w-full border rounded-lg bg-surface p-4 mb-4">
          <h2 className="flex mb-2 "><Video />{' '}Démonstration</h2>
          {/* TODO changer par nos vidéo de démonstration */}
          <iframe className="w-full h-50 object-fit" src="https://www.youtube.com/embed/Djtsw5k_DNc" title="ELDEN RING NIGHTREIGN – REVEAL GAMEPLAY TRAILER" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className="border rounded-lg bg-surface p-4 mb-4">
          <h2 className="flex"><Lightbulb />Indices{" "}<ChevronRight /></h2>
        </div>
        <div className="border rounded-lg bg-surface p-4">
          <h2 className="mb-2 text-xl font-semibold">Créé par</h2>
          <div className="flex gap-4">
            <Avatar className="w-15 h-15">
              <AvatarImage src={data.avatar} alt="Image de profil du Créateur du chalenge"/>
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="font-heading font-semibold text-lg">Nom d'utilisateur</p>
              <p className="text-text-muted text-sm mb-2">Créateur de {data.created > 1 ? ("challenges") : ("challenge")}</p>
              <p className="flex items-center mb-1"><Trophy className="h-4 w-4 mr-2" />{formatNumber(data.created)}{" "}{data.created > 1 ? ("challenges créés") : ("challenge créé")} </p>
              <p className="flex items-center"><Users className="h-4 w-4 mr-2" />{formatNumber(data.participations)}{" "}{data.participations > 1 ? ("participants") : ("participant")} </p>
            </div>
          </div>
        </div>
      </section>
      <section className="border bg-surface p-4 rounded-lg">
        <div className="not-last:relative flex justify-between items-center not-last:after:absolute not-last:after:bottom-10 after:left-0 after:bg-text-muted after:w-[90%] after:h-px">
          <h2 className="font-semibold text-sm">Participations ({formatNumber(data.participations)})</h2>
          <div className="flex gap-1 items-center">
            <Button className="rounded-sm bg-secondary text-secondary-foreground">Nouveautés</Button>
            <Button className="rounded-sm bg-surface text-text border-test-muted">Popularités</Button>
          </div>
        </div>
        <ul>
          <ParticipationCard />
          <ParticipationCard />
          <ParticipationCard />
        </ul>
      </section>
      <section className="flex flex-col items-center">
        <div>
          <h3 className="font-semibold">Prêt à relever le défi ?</h3>
          <p className="text-text-soft text-xs mb-1">Partagez votre meilleure performance et affronter la communauté !</p>
        </div>
        <Button className="w-full rounded-sm">Participer au challenge</Button>
      </section>
      
    </div>
  );
}