import Image from "next/image";
import Link from "next/link";
import { getMe } from "@/features/api/auth.api.server";
import { Participation } from "@/components/common/participation/Participation";
import { formatNumber, parseYoutubeUrl } from "@/lib/utils";
import { challengeDetail as styles } from "@/styles/challenge-detail.styles";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Users,
  Heart,
  Video,
  Lightbulb,
  Trophy,
  User,
  Pen,
} from "lucide-react";
import {
  getChallengeBySlug,
  getParticipationsByChallenge,
} from "@/features/api/challenge.api";
import {
  getUserFavoritedOnChallenge,
  getUserLikedOnChallenge,
} from "@/features/api/challenge.api.server";
import {
  LikeButton,
  FavoriteButton,
} from "@/components/common/challenge-detail/ButtonLike";
import { TagContainer } from "@/components/common/tagContainer/TagContainer";
import { LikedAndFavoriteChallenge } from "@/features/types/challenge.type";
import { DeleteButton } from "./DeleteButton";

interface ChallengeDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ChallengeDetailPage({
  params,
}: ChallengeDetailPageProps) {
  const { slug } = await params;
  const data = await getChallengeBySlug(slug);
  console.log(data);
  // Sorted hints for display
  const hints = Array.isArray(data?.hints) ? data.hints : [];
  const sortedHints = hints.slice().sort((a, b) => a.position - b.position);

  const me = await getMe();
  const user = me?.userWithoutPassword;

  let isAuthorOrAdmin = false;
  if (user?.username === data?.user.username || user?.role === "admin") {
    isAuthorOrAdmin = true;
  }

  const likedChallenges = await getUserLikedOnChallenge();
  const favoritedChallenges = await getUserFavoritedOnChallenge();
  const participations = await getParticipationsByChallenge(slug);
  const canParticipate = !participations?.some(
    (p) => p.user.username === user?.username,
  );

  const numberOfParticipants = data
    ? data.user.challenges.reduce((acc, p) => acc + p._count.participations, 0)
    : 0;

  const numberOfVotes = data
    ? data.user.challenges.reduce((acc, v) => acc + v._count.votes, 0)
    : 0;

  // Vérifie si le slug de la page courante figure dans la liste des challenges
  // likés par l'utilisateur. Retourne false si non connecté (likedChallenges = []).
  const isLiked: boolean =
    likedChallenges?.some(
      (chal: LikedAndFavoriteChallenge): boolean => chal.slug === slug,
    ) ?? false;

  const isFavorite: boolean =
    favoritedChallenges?.some(
      (chal: LikedAndFavoriteChallenge): boolean => chal.slug === slug,
    ) ?? false;
  if (!data) {
    return null;
  }

  return (
    <div className={styles.main}>
      {/* SECTION haut de page : Image, titre,...  */}
      <section className={styles.sectionDetail}>
        <div className="flex flex-row-reverse justify-between lg:justify-start items-center mb-2">
          <div className={styles.buttonContainer}>
            <LikeButton
              slug={slug}
              initialLiked={isLiked}
              initialCount={data._count.votes}
            />
            <FavoriteButton
              slug={slug}
              initialLiked={isFavorite}
              initialCount={data._count.favoritedBy}
            />
          </div>
          {isAuthorOrAdmin && (
            <div className="flex gap-2 items-center my-2 justify-center">
              <Link href={`/challenges/${data.slug}/edit`}>
                <Button type="button">
                  <Pen />
                  Modifier
                </Button>
              </Link>
              <DeleteButton slug={data.slug} />
            </div>
          )}
        </div>
        <div className={styles.detailContainer}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.imageTag}
              src={data.game.coverUrl || "/images/image-not-found.png"}
              width={10000}
              height={10000}
              alt="Image du jeu"
            />
          </div>
          <div className={styles.contentContainer}>
            <TagContainer data={data} />
            <h1 className={styles.title}>
              {data.game.name} - {data.title}
            </h1>
            <div className={styles.dataContainer}>
              <p className={styles.dataStat}>
                <Users className={styles.icon} />
                {formatNumber(data._count.participations)}{" "}
                {data._count.participations > 1 ? "participants" : "participant"}
              </p>
              <p className={styles.dataStat}>
                <Heart className={styles.icon} />
                {formatNumber(data._count.votes)}{" "}
                {data._count.votes > 1 ? "votes" : "vote"}
              </p>
            </div>
            <p className={styles.description}>{data.description}</p>
            <p className={styles.description}>{data.goals}</p>
          </div>
        </div>
        {/* SECTION Vidéo, Créé par and Indice */}
      </section>
      <section className={styles.sectionGrid}>
        <div className={styles.videoContainer}>
          <h2 className={styles.videoTitle}>
            <Video /> Démonstration
          </h2>
          {data.demo ? (
            <iframe
              className={styles.iframe}
              src={parseYoutubeUrl(data.demo)}
              title={data.game.name}
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <Image
              src={"/images/image-not-found-old.png"}
              className={styles.iframe}
              alt="Video non trouver"
              width={1000}
              height={1000}
            />
          )}
        </div>
        <div className={styles.hintsContainer}>
          <h2 className="flex">
            <Lightbulb /> Indices ({hints.length})
          </h2>
          <div>
            {/* TODO Change by challenge.hints */}
            <Accordion type="single" collapsible>
              {sortedHints.map((s) => (
                <AccordionItem key={s.position} value={`indice ${s.position}`}>
                  <AccordionTrigger>{`Indices ${s.position}`}</AccordionTrigger>
                  <AccordionContent>{s.description}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div className={styles.creatorContainer}>
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
                {data.user.challenges.length > 1 ? "challenges" : "challenge"}
              </p>
              <p className={styles.creatorStat}>
                <Trophy className={styles.creatorStatIcon} />
                {formatNumber(data.user.challenges.length)}{" "}
                {data.user.challenges.length > 1
                  ? "challenges créés"
                  : "challenge créé"}{" "}
              </p>
              <p className={styles.creatorStat}>
                <Users className={styles.creatorStatIcon} />
                {formatNumber(numberOfParticipants)}{" "}
                {numberOfParticipants > 1 ? "participants" : "participant"}
              </p>
              <p className={styles.creatorStat}>
                <Heart className={styles.creatorStatIcon} />
                {formatNumber(numberOfVotes)}{" "}
                {numberOfVotes > 1
                  ? "votes sur les challenges"
                  : "vote sur les challenges"}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION Participation */}
      <Participation challenge={data} participations={participations ?? []} />
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h3 className={styles.ctaTitle}>Prêt à relever le défi ?</h3>
          <p className={styles.ctaSubtitle}>
            Partagez votre meilleure performance et affronter la communauté !
          </p>
        </div>
        <div className="w-full lg:w-[80%]">
          {canParticipate ? (
            <Link href={`/participate/${slug}`}>
              <Button className={styles.ctaButton}>
                Participer au challenge
              </Button>
            </Link>
          ) : (
            <Button className={styles.ctaButtonDisable}>
              Vous y avez déjà participé
            </Button>
          )}
        </div>
      </section>
    </div>
  );
}
