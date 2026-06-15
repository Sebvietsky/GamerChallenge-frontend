// src/app/not-found.tsx
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-6 text-center bg-background">
      <Image
        src="/images/404.png"
        alt="404 Game Over"
        width={600}
        height={300}
        className="w-full max-w-lg object-contain"
      />

      <div className="flex flex-col gap-2">
        <p className="text-muted-foreground text-lg">
          Cette page existe… quelque part. Mais pas ici. Pas aujourd’hui.
        </p>
        <p className="text-sm text-muted-foreground">
          Retourne à l'accueil pour découvrir plus de challenges.
        </p>
      </div>

      <div className="flex gap-4 flex-wrap justify-center *:flex-1">
        <Link href="/" className="hover:brightness-110">
          <Image
            width={190}
            height={250}
            className="rounded-t-lg"
            src={"/images/home.png"}
            alt="image pour un jeu non trouver"
          />
          <Button className="w-full rounded-none rounded-b-lg py-4 hover:brightness-100">
            Retour à l'accueil
          </Button>
        </Link>
        <Link href="/challenges" className="hover:brightness-110">
          <Image
            width={190}
            height={250}
            className="rounded-t-lg"
            src={"/images/find-challenge.png"}
            alt="image montrant un couple de joueur regardant une liste de challenge"
          />
          <Button className="w-full rounded-none rounded-b-lg py-4 hover:brightness-100">
            Voir les challenges
          </Button>
        </Link>
      </div>
    </div>
  );
}
