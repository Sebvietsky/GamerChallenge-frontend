"use client";

import {
  unvoteParticipation,
  voteParticipation,
} from "@/features/api/participation.api";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/features/hooks/useAuth";
import { toast } from "sonner";

interface ButtonLikeProps {
  initialVotes: number;
  initialLiked?: boolean;
  slug: string;
}

export default function ButtonLike({
  initialVotes,
  initialLiked = false,
  slug,
}: ButtonLikeProps) {
  const { isAuthenticated } = useAuth();

  const [isLiked, setIsLiked] = useState(initialLiked);
  const [votes, setVotes] = useState(initialVotes);
  const handleLike = async () => {
    setIsLiked(!isLiked);
    setVotes(isLiked ? votes - 1 : votes + 1);

    try {
      if (isLiked) {
        await unvoteParticipation(slug);
      } else {
        await voteParticipation(slug);
      }
    } catch (error) {
      // Rollback
      setIsLiked(isLiked);
      setVotes(votes);
    }
  };

  return (
    <div className="self-end lg:self-start">
      <div className="flex items-center gap-2 lg:mr-6">
        <Button
          type="button"
          onClick={
            isAuthenticated
              ? handleLike
              : () => {
                  toast.error("Connectez-vous pour effectuer cette action");
                }
          }
          variant={!isLiked ? "iconButtonToggle" : "iconButton"}
        >
          <Heart />
        </Button>
        <span>
          {votes} {votes > 1 ? "votes" : "vote"}
        </span>
      </div>
    </div>
  );
}
