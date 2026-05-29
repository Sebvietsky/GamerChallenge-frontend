"use client";

import Link from "next/link";

import { User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { bannerStyles as styles } from "./banner.styles";
import { useAuth } from "@/features/auth/hooks/useAuth";

export function BannerDesktop() {
  // TEMPORAIRE
  const { user } = useAuth();

  const avatarSrc = user?.profilPicture;

  return (
    <header className={styles.container}>
      <div className={styles.desktopContainer}>
        <Link href="/dashboard">
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
