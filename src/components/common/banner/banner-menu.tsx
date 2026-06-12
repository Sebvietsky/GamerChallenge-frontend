"use client";

import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Sidebar } from "@/components/common/sidebar/sidebar";
import { cn } from "@/lib/utils";

import { bannerStyles as styles } from "./banner.styles";

// Burger ouvrant la sidebar dans un Sheet. Affiché tant que la sidebar fixe
// n'est pas présente (sous lg). Partagé entre banner mobile et desktop.
export function BannerMenu({ className }: { className?: string }) {
  return (
    <Sheet>
      <SheetTrigger className={cn(styles.mobileMenuButton, className)}>
        <Menu size={20} />
      </SheetTrigger>

      <SheetContent
        side="left"
        showCloseButton={false}
        className={styles.mobileSidebar}
      >
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>

        <Sidebar mobile />
      </SheetContent>
    </Sheet>
  );
}
