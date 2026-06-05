"use client";

import Link from "next/link";
import { Menu, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAuth } from "@/features/hooks/useAuth";

import { Sidebar } from "@/components/common/sidebar/sidebar";
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
        <Sheet>
          <SheetTrigger className={styles.mobileMenuButton}>
            <Menu size={20} />
          </SheetTrigger>

          <SheetContent
            side="left"
            showCloseButton={false}
            className={styles.mobileSidebar}
          >
            <SheetHeader>
              <SheetTitle> Navigation </SheetTitle>
            </SheetHeader>

            <Sidebar mobile />
          </SheetContent>
        </Sheet>

        {/* AVATAR */}
        {isAuthenticated ? (
          <>
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
            <Button type="button" className="ml-2" onClick={handleLogout}>
              <LogOut />
              Logout
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
          </div>
        )}
      </div>
    </header>
  );
}
