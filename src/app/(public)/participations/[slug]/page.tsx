import { TagContainer } from "@/components/common/tagContainer/TagContainer";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User, Trophy, Heart, Video, Pen, Trash } from "lucide-react";
import type { LikedAndFavoriteChallenge } from "@/features/types/challenge.type";
import { formatNumber } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";

import { getParticipationsBySlug } from "@/features/api/participation.api";
import { isLikedParticipation } from "@/features/api/participations.api.server";
import { parseYoutubeUrl } from "@/lib/utils";
import { getMe } from "@/features/api/auth.api.server";
import ButtonLike from "./ButtonLike";
import { Button } from "@/components/ui/button";
import { DeleteButton } from "./DeleteButton";

interface ParticipationDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ParticipationPage({
  params,
}: ParticipationDetailPageProps) {
  const { slug } = await params;

  const data = await getParticipationsBySlug(slug);

  const me = await getMe();
  const user = me?.userWithoutPassword;

  let isAuthorOrAdmin = false;
  if (user?.username === data?.user.username || user?.role === "admin") {
    isAuthorOrAdmin = true;
  }

  const likedParticpation = await isLikedParticipation();
  const isLiked: boolean =
    likedParticpation?.some(
      (p: LikedAndFavoriteChallenge) => p.slug === slug,
    ) ?? false;

  if (!data) return null;

  return (
    <div className="space-y-8 py-8 px-6 lg:px-8">
      {/* SECTION Header — image gauche + infos droite */}
      <section className="flex flex-col w-full justify-between lg:flex-row gap-4 lg:gap-6">
        <div className="flex flex-col lg:flex-row gap-6 order-last lg:w-[80%] lg:order-first">
          <div className="shrink-0 self-center w-60 lg:w-60">
            <Image
              src={data.challenge.game.coverUrl}
              alt={`Cover de ${data.challenge.game.name}`}
              width={250}
              height={350}
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
            <p className="flex items-center text-sm md:text-base">
              <Heart className="mr-2" />
              {formatNumber(data._count.votes)}{" "}
              {data._count.votes > 1 ? "votes" : "vote"}
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse justify-between gap-1">
          {isAuthorOrAdmin && (
            <div className="flex order-2 content-center gap-2 my-2">
              <Link href={`/participations/${slug}/edit`}>
                <Button type="button" className="text-xs">
                  <Pen />
                  Modifier
                </Button>
              </Link>
              <DeleteButton slug={data.slug} />
            </div>
          )}
          <ButtonLike
            slug={slug}
            initialVotes={data._count.votes}
            initialLiked={isLiked}
          />
        </div>
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
        <div className="lg:w-90 w-full shrink-0 bg-surface rounded-lg p-4 space-y-4 self-start">
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
              {data.user.participations.reduce(
                (acc, p) => acc + p._count.votes,
                0,
              )}{" "}
              {data.user.participations.reduce(
                (acc, p) => acc + p._count.votes,
                0,
              ) > 1
                ? "Votes sur les participations"
                : "Vote sur les participations"}
            </p>
            <p className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              {data.user._count.participations}{" "}
              {data.user._count.participations > 1
                ? "Participations"
                : "Participation"}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
