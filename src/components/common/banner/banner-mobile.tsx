"use client";

import Link from "next/link";
import { User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/features/hooks/useAuth";

import { BannerMenu } from "./banner-menu";
import { bannerStyles as styles } from "./banner.styles";

export function BannerMobile() {
  // TEMPORAIRE
  const { user, isAuthenticated, logout } = useAuth();

  async function handleLogout() {
    await logout();
  }

  const avatarSrc = user?.userWithoutPassword.profilePicture;

  return (
    <header className={styles.container}>
      <div className={styles.mobileContainer}>
        {/* MENU */}
        <BannerMenu />

        {/* AVATAR */}
        {isAuthenticated ? (
          <>
            <div className="flex items-center gap-2">
              <Link href="/dashboard">
                <Avatar className={styles.avatarContainer}>
                  <AvatarImage
                    className={styles.avatar}
                    src={avatarSrc || undefined}
                    alt="Avatar utilisateur"
                  />
                  <AvatarFallback className={styles.avatarFallback}>
                    <User className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              </Link>
              <Button type="button" onClick={handleLogout}>
                <LogOut />
                Logout
              </Button>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button className="px-4 py-6">
                <User />
                Se connecter
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
