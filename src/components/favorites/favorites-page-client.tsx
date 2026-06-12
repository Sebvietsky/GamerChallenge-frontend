"use client";

import { useFavoriteChallenges } from "@/features/hooks/useFavoriteChallenges";
import { FavoriteList } from "../dashboard/favorite-list";

export function FavoritesPageClient() {
  const { favoriteChallenges, loadMoreChallenges, hasMoreData } =
    useFavoriteChallenges();

  return (
    <FavoriteList
      favoriteChallenges={favoriteChallenges}
      hasMoreData={hasMoreData}
      loadMoreChallenges={loadMoreChallenges}
    />
  );
}
