"use client";

import { Dispatch, SetStateAction } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";

// Système de difficulté / catégorie à refacto après routes GET mises en place côté Back => créer une checkBox pour chaque difficulté / catégorie fetch

enum DifficultyName {
  easy = "Facile",
  medium = "Moyen",
  hard = "Difficile",
  expert = "Expert",
  legendary = "Légendaire",
}

enum CategoryName {
  speedrun = "Speedrun",
  noHit = "No Hit",
  scoreAttack = "Score Attack",
  cosplayRun = "Cosplay Run",
  creativity = "Créativité",
  pvp = "PvP",
  coop = "Coopératif",
  lowPercent = "Low%",
}

interface ChallengesFilterButtonProps {
  selectedDifficulties: DifficultyName[];
  setSelectedDifficulties: Dispatch<SetStateAction<DifficultyName[]>>;
  selectedCategories: CategoryName[];
  setSelectedCategories: Dispatch<SetStateAction<CategoryName[]>>;
}

export function ChallengesFilterButton({
  selectedDifficulties,
  setSelectedDifficulties,
  selectedCategories,
  setSelectedCategories,
}: ChallengesFilterButtonProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="filterButtonAlt">Filtres</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Filtrer par...</DropdownMenuLabel>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Difficulté</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => setSelectedDifficulties([])}>
                  Tout décocher
                </DropdownMenuItem>
                <DropdownMenuCheckboxItem
                  checked={
                    selectedDifficulties.includes(DifficultyName.easy) ?? false
                  }
                  onCheckedChange={() =>
                    selectedDifficulties.includes(DifficultyName.easy)
                      ? setSelectedDifficulties((prev) =>
                          prev.filter((diff) => diff !== DifficultyName.easy),
                        )
                      : setSelectedDifficulties((prev) => [
                          ...prev,
                          DifficultyName.easy,
                        ])
                  }
                >
                  Facile
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={
                    selectedDifficulties.includes(DifficultyName.medium) ??
                    false
                  }
                  onCheckedChange={() =>
                    selectedDifficulties.includes(DifficultyName.medium)
                      ? setSelectedDifficulties((prev) =>
                          prev.filter((diff) => diff !== DifficultyName.medium),
                        )
                      : setSelectedDifficulties((prev) => [
                          ...prev,
                          DifficultyName.medium,
                        ])
                  }
                >
                  Moyen
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={
                    selectedDifficulties.includes(DifficultyName.hard) ?? false
                  }
                  onCheckedChange={() =>
                    selectedDifficulties.includes(DifficultyName.hard)
                      ? setSelectedDifficulties((prev) =>
                          prev.filter((diff) => diff !== DifficultyName.hard),
                        )
                      : setSelectedDifficulties((prev) => [
                          ...prev,
                          DifficultyName.hard,
                        ])
                  }
                >
                  Difficile
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={
                    selectedDifficulties.includes(DifficultyName.expert) ??
                    false
                  }
                  onCheckedChange={() =>
                    selectedDifficulties.includes(DifficultyName.expert)
                      ? setSelectedDifficulties((prev) =>
                          prev.filter((diff) => diff !== DifficultyName.expert),
                        )
                      : setSelectedDifficulties((prev) => [
                          ...prev,
                          DifficultyName.expert,
                        ])
                  }
                >
                  Expert
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={
                    selectedDifficulties.includes(DifficultyName.legendary) ??
                    false
                  }
                  onCheckedChange={() =>
                    selectedDifficulties.includes(DifficultyName.legendary)
                      ? setSelectedDifficulties((prev) =>
                          prev.filter(
                            (diff) => diff !== DifficultyName.legendary,
                          ),
                        )
                      : setSelectedDifficulties((prev) => [
                          ...prev,
                          DifficultyName.legendary,
                        ])
                  }
                >
                  Légendaire
                </DropdownMenuCheckboxItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Categorie</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => setSelectedCategories([])}>
                  Tout décocher
                </DropdownMenuItem>
                <DropdownMenuCheckboxItem
                  checked={
                    selectedCategories.includes(CategoryName.speedrun) ?? false
                  }
                  onCheckedChange={() =>
                    selectedCategories.includes(CategoryName.speedrun)
                      ? setSelectedCategories((prev) =>
                          prev.filter((diff) => diff !== CategoryName.speedrun),
                        )
                      : setSelectedCategories((prev) => [
                          ...prev,
                          CategoryName.speedrun,
                        ])
                  }
                >
                  Speedrun
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={
                    selectedCategories.includes(CategoryName.noHit) ?? false
                  }
                  onCheckedChange={() =>
                    selectedCategories.includes(CategoryName.noHit)
                      ? setSelectedCategories((prev) =>
                          prev.filter((diff) => diff !== CategoryName.noHit),
                        )
                      : setSelectedCategories((prev) => [
                          ...prev,
                          CategoryName.noHit,
                        ])
                  }
                >
                  No Hit
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={
                    selectedCategories.includes(CategoryName.coop) ?? false
                  }
                  onCheckedChange={() =>
                    selectedCategories.includes(CategoryName.coop)
                      ? setSelectedCategories((prev) =>
                          prev.filter((diff) => diff !== CategoryName.coop),
                        )
                      : setSelectedCategories((prev) => [
                          ...prev,
                          CategoryName.coop,
                        ])
                  }
                >
                  Coopératif
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={
                    selectedCategories.includes(CategoryName.cosplayRun) ??
                    false
                  }
                  onCheckedChange={() =>
                    selectedCategories.includes(CategoryName.cosplayRun)
                      ? setSelectedCategories((prev) =>
                          prev.filter(
                            (diff) => diff !== CategoryName.cosplayRun,
                          ),
                        )
                      : setSelectedCategories((prev) => [
                          ...prev,
                          CategoryName.cosplayRun,
                        ])
                  }
                >
                  Cosplay Run
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={
                    selectedCategories.includes(CategoryName.creativity) ??
                    false
                  }
                  onCheckedChange={() =>
                    selectedCategories.includes(CategoryName.creativity)
                      ? setSelectedCategories((prev) =>
                          prev.filter(
                            (diff) => diff !== CategoryName.creativity,
                          ),
                        )
                      : setSelectedCategories((prev) => [
                          ...prev,
                          CategoryName.creativity,
                        ])
                  }
                >
                  Créativité
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={
                    selectedCategories.includes(CategoryName.lowPercent) ??
                    false
                  }
                  onCheckedChange={() =>
                    selectedCategories.includes(CategoryName.lowPercent)
                      ? setSelectedCategories((prev) =>
                          prev.filter(
                            (diff) => diff !== CategoryName.lowPercent,
                          ),
                        )
                      : setSelectedCategories((prev) => [
                          ...prev,
                          CategoryName.lowPercent,
                        ])
                  }
                >
                  Low %
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={
                    selectedCategories.includes(CategoryName.scoreAttack) ??
                    false
                  }
                  onCheckedChange={() =>
                    selectedCategories.includes(CategoryName.scoreAttack)
                      ? setSelectedCategories((prev) =>
                          prev.filter(
                            (diff) => diff !== CategoryName.scoreAttack,
                          ),
                        )
                      : setSelectedCategories((prev) => [
                          ...prev,
                          CategoryName.scoreAttack,
                        ])
                  }
                >
                  Score Attack
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={
                    selectedCategories.includes(CategoryName.pvp) ?? false
                  }
                  onCheckedChange={() =>
                    selectedCategories.includes(CategoryName.pvp)
                      ? setSelectedCategories((prev) =>
                          prev.filter((diff) => diff !== CategoryName.pvp),
                        )
                      : setSelectedCategories((prev) => [
                          ...prev,
                          CategoryName.pvp,
                        ])
                  }
                >
                  PvP
                </DropdownMenuCheckboxItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
