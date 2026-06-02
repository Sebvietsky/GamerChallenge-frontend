import {
  Gamepad2,
  Home,
  MessageCircle,
  Trophy,
  FileText,
  Star,
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
    href: "/classements",
    icon: Trophy,
  },

  {
    label: "Participations à la une",
    href: "/featured",
    icon: MessageCircle,
  },

  {
    label: "Mes participations",
    href: "/dashboard/participations",
    icon: FileText,
  },

  {
    label: "Mes Favoris",
    href: "/dashboard/favorites",
    icon: Star,
  },
];
