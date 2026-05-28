import {
  Gamepad2,
  Heart,
  Home,
  MessageCircle,
  Trophy,
  FileText,
} from "lucide-react";

export const sidebarLinks = [
  {
    label: "Accueil",
    href: "/",
    icon: Home,
  },

  {
    label: "Les Challenges",
    href: "/challenges",
    icon: Gamepad2,
  },

  {
    label: "Les Classements",
    href: "/leaderboard",
    icon: Trophy,
  },

  {
    label: "Participations à la une",
    href: "/featured",
    icon: MessageCircle,
  },

  {
    label: "Mes participations",
    href: "/participations",
    icon: FileText,
  },

  {
    label: "Mes Favoris",
    href: "/favoris",
    icon: Heart,
  },
];
