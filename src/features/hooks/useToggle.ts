"use client";
import { useState } from "react";
import { toast } from "sonner";

interface ToggleService {
  add: (slug: string) => Promise<void>;
  remove: (slug: string) => Promise<void>;
}

interface UseToggleProps {
  initialLiked: boolean;
  initialCount: number;
  slug: string;
  service: ToggleService;
  unauthMessage?: string;
}

export const useToggle = ({
  initialLiked,
  initialCount,
  slug,
  service,
  unauthMessage,
}: UseToggleProps) => {
  const [isLiked, setIsLiked] = useState(initialLiked);
  const [likeCount, setLikeCount] = useState(initialCount);
  const [isPending, setIsPending] = useState(false);

  const toggleLike = async () => {
    if (isPending) return;

    const newLiked = !isLiked;
    setIsLiked(newLiked);
    setLikeCount((prev) => (newLiked ? prev + 1 : prev - 1));
    setIsPending(true);

    try {
      if (newLiked) {
        await service.add(slug);
      } else {
        await service.remove(slug);
      }
    } catch {
      setIsLiked(!newLiked);
      setLikeCount((prev) => (newLiked ? prev - 1 : prev + 1));
    } finally {
      setIsPending(false);
    }
  };

  const toastMessage = () => {
    toast.error(unauthMessage ?? "Connectez-vous pour effectuer cette action");
  };

  return { isLiked, likeCount, toggleLike, isPending, toastMessage };
};
