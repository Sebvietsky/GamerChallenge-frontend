import { OrderBy, Sort } from "@/features/types/challenge.type";

export const CHALLENGES_PER_PAGE = 5;
export const CHALLENGES_DEFAULT_PAGE = 1;
export const CHALLENGES_ORDER_BY = OrderBy;
export const CHALLENGES_SINCE = undefined;
export const CHALLENGES_SORT = Sort;
export const EASTER_EGG = {
  id: "easter_egg",
  slug: "easter_egg",
  title: "⚠️ NE PAS CLIQUER ⚠️",
  description: "On vous avait pourtant prévenu.",
  closesAt: new Date().toISOString(),
  createdAt: new Date().toISOString(),
  status: "hidden",
  hints: "",
  goals: "",
  game: {
    name: "Système",
    studio: null,
    platform: null,
    coverUrl: "/images/image-not-found.png",
    bannerUrl: "",
    categories: [],
  },
  challengeCategory: {
    id: -1,
    name: "Système",
    colorCode: "#111827",
  },
  difficulty: {
    id: -1,
    name: "Système",
    colorCode: "#ef4444",
  },
  user: {
    username: "Système",
    country: "",
    profilePicture: "",
    _count: { participations: 0 },
    challenges: [],
    participations: [],
  },
  _count: {
    participations: 0,
    favoritedBy: 0,
    votes: 0,
  },
  isEasterEgg: true,
};
