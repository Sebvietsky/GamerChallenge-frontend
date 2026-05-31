"use client";

import Image from "next/image";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { X, LogOut } from "lucide-react";

import { useAuth } from "@/features/auth/hooks/useAuth";

import { SheetClose } from "@/components/ui/sheet";

import { sidebarLinks } from "./sidebar.link";

import { sidebarStyles as styles } from "./sidebar.styles";

interface SidebarProps {
  mobile?: boolean;
}

export function Sidebar({ mobile = false }: SidebarProps) {
  const pathname = usePathname();
  const { logout } = useAuth();

  return (
    <aside className={styles.sidebar}>
      {/* MOBILE HEADER */}
      {mobile && (
        <div className={styles.mobileHeader}>
          <Link href="/" className="inline-flew w-fit">
            <Image
              src="/Logo-Gamer-Challenge.png"
              alt="Logo Gamer Challenge"
              width={100}
              height={100}
              loading="eager"
            />
          </Link>

          <SheetClose className={styles.mobileCloseButton}>
            <X size={18} />
          </SheetClose>
        </div>
      )}

      {/* DESKTOP LOGO */}
      {!mobile && (
        <div className={styles.logo}>
          <Link href="/" className="inline-flew w-fit">
            <Image
              src="/Logo-Gamer-Challenge.png"
              alt="Logo Gamer Challenge"
              width={100}
              height={100}
              loading="eager"
            />
          </Link>
        </div>
      )}

      {/* NAVIGATION */}
      <nav className={styles.navigation}>
        {sidebarLinks.map((link) => {
          const Icon = link.icon;

          const isActive = pathname === link.href;

          return (
            <Link
              key={link.label}
              href={link.href}
              className={isActive ? styles.navItemActive : styles.navItem}
            >
              <Icon size={18} />

              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <button onClick={logout} className={styles.navItem}>
        <LogOut size={18} />
        <span>Déconnexion</span>
      </button>
    </aside>
  );
}
