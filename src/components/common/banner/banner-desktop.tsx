"use client";

import Link from "next/link";
import { LogOut, User, UserPen } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { bannerStyles as styles } from "./banner.styles";
import { useAuth } from "@/features/hooks/useAuth";
import { Button } from "@/components/ui/button";

export function BannerDesktop() {
  const { user, isAuthenticated, logout } = useAuth();

  async function handleLogout() {
    await logout();
  }

  const avatarSrc = user?.userWithoutPassword.profilePicture;

  return (
    <header className={styles.container}>
      <div className={styles.desktopContainer}>
        {isAuthenticated ? (
          <>
            <Link href="/dashboard">
              <Avatar className={styles.avatarContainer}>
                <AvatarImage
                  className={styles.avatar}
                  src={avatarSrc ||undefined}
                  alt="Avatar utilisateur"
                />

                <AvatarFallback className={styles.avatarFallback}>
                  <User className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
            </Link>
            <Button type="button" className="ml-2" onClick={handleLogout}>
              <LogOut />
              Se déconnecter
            </Button>
          </>
        ) : (
          <div className="flex items-center gap-2">
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
        )}
      </div>
    </header>
  );
}
