"use client";

import Link from "next/link";

import { Menu, User, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Sidebar } from "@/components/common/sidebar/sidebar";
import { getAvatar } from "@/features/auth/auth.utils";
import { bannerStyles as styles } from "./banner.styles";

export function BannerMobile() {
  // TEMPORAIRE
  const user = null;

  const avatarSrc = getAvatar(user?.image);

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
