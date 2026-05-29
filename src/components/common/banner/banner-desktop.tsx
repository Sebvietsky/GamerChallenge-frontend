"use client";

import Link from "next/link";

import { User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { getAvatar } from "@/features/auth/auth.utils";
import { bannerStyles as styles } from "./banner.styles";

export function BannerDesktop() {
  // TEMPORAIRE
  const user = null;

  const avatarSrc = getAvatar(user?.image);

  return (
    <header className={styles.container}>
      <div className={styles.desktopContainer}>
        <Link href={user ? "/dashboard" : "/login"}>
          <Avatar className={styles.avatarContainer}>
            <AvatarImage
              className={styles.avatar}
              src={avatarSrc}
              alt="Avatar utilisateur"
            />

            <AvatarFallback className={styles.avatarFallback}>
              <User className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </header>
  );
}
