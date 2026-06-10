"use client";

import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToggle } from "@/features/hooks/useToggle";
import { favoriteToggle, likeToggle } from "@/features/api/challenge.api";
import { useAuth } from "@/features/hooks/useAuth";

interface ButtonProps {
  slug: string;
  initialLiked: boolean;
  initialCount: number;
}

export const LikeButton = ({
  slug,
  initialLiked,
  initialCount,
}: ButtonProps) => {
  const { isAuthenticated } = useAuth();
  const { isLiked, toggleLike, isPending, toastMessage } = useToggle({
    service: likeToggle,
    slug,
    initialLiked,
    initialCount,
    unauthMessage: "Connectez-vous pour effectuer cette action",
  });

  return (
    <Button
      onClick={isAuthenticated ? toggleLike : toastMessage}
      variant={!isLiked ? "iconButtonToggle" : "iconButton"}
      disabled={isPending}
    >
      <Heart />
    </Button>
  );
};

export const FavoriteButton = ({
  slug,
  initialLiked,
  initialCount,
}: ButtonProps) => {
  const { isAuthenticated } = useAuth();
  const { isLiked, toggleLike, isPending, toastMessage } = useToggle({
    service: favoriteToggle,
    slug,
    initialLiked,
    initialCount,
    unauthMessage: "Connectez-vous pour effectuer cette action",
  });

  return (
    <Button
      onClick={isAuthenticated ? toggleLike : toastMessage}
      variant={!isLiked ? "iconButtonToggle" : "iconButton"}
      disabled={isPending}
    >
      <Star />
    </Button>
  );
};
