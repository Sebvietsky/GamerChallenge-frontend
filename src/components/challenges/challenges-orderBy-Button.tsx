"use client";

import { OrderBy, Sort } from "@/features/types/challenge.type";
import { Button } from "../ui/button";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { homeStyles } from "@/styles/global.styles";

type ChallengesOrderByButtonProps = {
  selfOrderBy: OrderBy;
  currentOrderBy: OrderBy;
  setOrderBy: Dispatch<SetStateAction<OrderBy>>;
  sort: Sort;
  setSort: Dispatch<SetStateAction<Sort>>;
  displayedText: "Récents" | "Populaires" | "Difficulté";
};

export function ChallengesOrderByButton({
  selfOrderBy,
  setOrderBy,
  sort,
  setSort,
  displayedText,
  currentOrderBy,
}: ChallengesOrderByButtonProps) {
  return (
    <>
      <Button
        onClick={() => {
          if (currentOrderBy !== selfOrderBy) {
            setSort(Sort.asc);
          } else if (sort === Sort.asc) {
            setSort(Sort.desc);
          } else {
            setSort(Sort.asc);
          }
          setOrderBy(selfOrderBy);
        }}
        className={
          currentOrderBy === selfOrderBy
            ? homeStyles.challengesOrderByButtonActive
            : "bg-brand-primary-light"
        }
      >
        {displayedText}{" "}
        <Image
          src={
            sort === Sort.desc && currentOrderBy === selfOrderBy
              ? "/icons/caret-down.svg"
              : "/icons/caret-up.svg"
          }
          height={24}
          width={24}
          alt="icon up down"
        />
      </Button>
    </>
  );
}
