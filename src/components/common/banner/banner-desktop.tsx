"use client";

import Link from "next/link";
import { LogOut, User, UserPen } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { bannerStyles as styles } from "./banner.styles";
import { useAuth } from "@/features/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useDashboard } from "@/features/hooks/useDashboard";
import { BannerMenu } from "./banner-menu";

export function BannerDesktop() {
  const { user, isAuthenticated, logout } = useAuth();
  const { dashboard } = useDashboard();

  async function handleLogout() {
    await logout();
  }

  const avatarSrc = user?.userWithoutPassword.profilePicture;

  return (
    <header className={styles.container}>
      <div className={styles.desktopContainer}>
        {isAuthenticated ? (
          <>
            {/* GAUCHE : burger (md→lg) + infos utilisateur */}
            <div className="flex items-center gap-3">
              <BannerMenu className="lg:hidden" />
              {dashboard?.level && (
                <div className={styles.userData}>
                  <span className={styles.username}>
                    {user?.userWithoutPassword.username}
                  </span>
                  <span className={styles.userLevel}>{dashboard.level}</span>
                </div>
              )}
            </div>

            {/* CENTRE : avatar */}
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

            {/* DROITE : déconnexion */}
            <Button type="button" onClick={handleLogout}>
              <LogOut />
              Se déconnecter
            </Button>
          </>
        ) : (
          <>
            {/* GAUCHE : burger (md→lg) */}
            <BannerMenu className="lg:hidden" />

            {/* DROITE : connexion / inscription */}
            <div className="ml-auto flex items-center gap-2">
              <Link href="/login">
                <Button className="px-4 py-6">
                  <User />
                  Se connecter
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-surface text-text px-4 py-6 hover:bg-secondary/5 hover:ring-ring/80">
                  <UserPen />
                  Créer un compte
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
