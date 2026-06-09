"use client";

import { Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { sidebarStyles as styles } from "./sidebar/sidebar.styles";

export function ToggleDark() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button className={styles.bottomAction} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <Moon size={20} />
    </Button>
  );
}
