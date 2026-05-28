"use client";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { sidebarLinks } from "./sidebar.link";

import { sidebarStyles as styles } from "./sidebar.styles";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoIcon}>
        <Link href="/">
          <Image
            className="h-16 w-16"
            src="/Logo-Gamer-Challenge.png"
            alt="Logo Gamer Challenge"
            width={64}
            height={64}
            loading="eager"
          />
        </Link>
      </div>

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
    </aside>
  );
}
