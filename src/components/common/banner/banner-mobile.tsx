"use client";

import Link from "next/link";

import { Menu, User} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAuth } from "@/features/auth/hooks/useAuth";

import { Sidebar } from "@/components/common/sidebar/sidebar";
import { bannerStyles as styles } from "./banner.styles";

export function BannerMobile() {
  // TEMPORAIRE
  const { user } = useAuth();

  const avatarSrc = user?.profilPicture;

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
            <Sidebar mobile />
          </SheetContent>
        </Sheet>

        {/* AVATAR */}
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
