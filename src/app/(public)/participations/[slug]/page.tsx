
import { TagContainer } from "@/components/common/tagContainer/TagContainer";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User, Trophy, Heart, Video } from "lucide-react";

import Image from "next/image";

import { getParticipationsBySlug } from "@/features/api/participation.api";
import { parseYoutubeUrl } from "@/lib/utils";
import ButtonLike from "./ButtonLike";
import { getInformationDashboard } from "@/features/api/user.api";

interface ParticipationDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ParticipationPage({
  params,
}: ParticipationDetailPageProps) {
  const { slug } = await params;
  const data = await getParticipationsBySlug(slug);
  const userInfo = await getInformationDashboard();

  if (!data) return null;

  return (
    <div className="space-y-8 py-8 px-6 lg:px-8">
      {/* SECTION Header — image gauche + infos droite */}
      <section className="flex flex-col items-center w-full justify-between lg:flex-row gap-4 lg:gap-6">
        <div className="flex flex-col lg:flex-row gap-6 order-last lg:w-[80%] lg:order-first">
          <div className="shrink-0 self-center">
            <Image
              src={data.challenge.game.coverUrl}
              alt={`Cover de ${data.challenge.game.name}`}
              width={190}
              height={270}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col gap-3">
            <TagContainer data={data.challenge} />
            <h1 className="text-2xl font-bold">
              {data.challenge.game.name} - {data.challenge.title}
            </h1>
            {data.description && (
            <p className="text-sm mt-2">{data.description}</p>
          )}
          </div>
        </div>
            <ButtonLike initialVotes={data._count.votes}/>
      </section>

      {/* SECTION bas — vidéo gauche + carte auteur droite */}
      <section className="flex flex-col lg:flex-row gap-6">
        {/* Colonne principale : vidéo */}
        <div className="flex-1 bg-surface rounded-lg p-4 space-y-2">
          <div className="flex items-center gap-2">
            <Video size={20} className="shrink-0" />
            <p className="">{data.title}</p>
          </div>
          <iframe
            src={parseYoutubeUrl(data.video)}
            title={data.title}
            className="w-full aspect-video rounded-lg"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        {/* Colonne latérale : carte auteur */}
        <div className="lg:w-64 w-full shrink-0 bg-surface rounded-lg p-4 space-y-4 self-start">
          <p className="font-semibold text-sm">Participation de</p>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage
                src={data.user.profilePicture || undefined}
                alt={data.user.username}
              />
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
            <span className="font-medium">{data.user.username}</span>
          </div>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              {userInfo.totalChallengeUserVoted} {userInfo.totalChallengeUserVoted > 1 ? "Votes sur les challenge" : "Vote sur les challenges"}
            </p>
            <p className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              {userInfo.totalChallengeCreated} {userInfo.totalChallengeCreated > 1 ? "Challenges créés" : "Challenge crée"}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
