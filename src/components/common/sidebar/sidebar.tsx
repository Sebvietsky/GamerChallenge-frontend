"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { CircleHelp, Search, Settings, X } from "lucide-react";

import { SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { sidebarLinks } from "./sidebar.link";
import { sidebarStyles as styles } from "./sidebar.styles";

import { useSearch } from "@/features/hooks/useSearch";
import { SearchContextType } from "@/features/types/search.type";
import { ToggleDark } from "../toggle-darkmode";

interface SidebarProps {
  mobile?: boolean;
}

export function Sidebar({ mobile = false }: SidebarProps) {
  const pathname = usePathname();
  const { search, setSearch } = useSearch() as SearchContextType;

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

      {/* SEARCHBAR */}
      <div className={styles.topActions}>
        <div className={styles.searchContainer}>
          <Search className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Rechercher..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        {/* BUTTON CREATE CHALLENGE */}
        <Link href="/create-challenge">
          <Button className={styles.createChallengeButton}>
            Créer un challenge
          </Button>
        </Link>
      </div>

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

      {/* BOTTOM ACTIONS */}
      <div className={styles.bottomActions}>
        <ToggleDark />
        <Link href="/about" className={styles.bottomAction}>
          <Settings size={20} />
        </Link>
        <Link href="/legal" className={styles.bottomAction}>
          <CircleHelp size={20} />
        </Link>
      </div>
    </aside>
  );
}
