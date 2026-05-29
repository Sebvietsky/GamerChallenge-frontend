"use client";

import Link from "next/link";
import { User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { getAvatar } from "@/features/auth/auth.utils";

import { bannerStyles as styles } from "./banner.styles";

export function Banner() {
  // TEMPORAIRE
  const user = null;

  // Exemple connecté :
  // const user = {
  //   image: "/avatar-neutre.jpg",
  // };

  const avatarSrc = getAvatar(user?.image);

  return (
    <header className={styles.container}>
      <Link href={user ? "/dashboard" : "/login"}>
        <Avatar>
          <AvatarImage
            className={styles.avatar}
            src={avatarSrc}
            alt="Avatar utilisateur"
          />
          <AvatarFallback>
            <User className={styles.avatarFallback} />
          </AvatarFallback>
        </Avatar>
      </Link>
    </header>
  );
}
