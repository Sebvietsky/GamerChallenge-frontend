"use client";

import { Input } from "@/components/ui/input";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { challengeCategories } from "@/lib/challenge-category";
import { getTextColor } from "@/lib/utils";
import { useCreateChallenge } from "@/features/hooks/useCreateChallenge";

export function CreateChallenge() {
  const {form, errors, categoryId, toggleCategory, onSubmit} = useCreateChallenge();
  const { register, watch, setValue } = from;
  const [difficultyId, setDifficultyId] = useState<string>("");
  const [challengeCategoryId, setChallengeCategoryId] = useState<string>("");
  const [descriptionCount, setDescriptionCount] = useState("");
  const [hintsCount, setHintsCount] = useState("");
  const MAX = 500;
  return (
    <form action="">
      <label htmlFor="title">Titre</label>
      <Input id="title" />

      <label htmlFor="igbdId">Jeu</label>
      <Input />

      <label htmlFor="description">Description</label>
      <Textarea
        value={descriptionCount}
        onChange={(e) => setDescriptionCount(e.target.value)}
        maxLength={MAX}
        id="description"
      />
      <p>
        {descriptionCount === "" ? "0" : descriptionCount.length}/{MAX}
      </p>

      <label htmlFor="difficultyId">Difficulté</label>
      <Select onValueChange={setDifficultyId}>
        <SelectTrigger>
          <SelectValue placeholder="Choisissez la difficulté" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Facile</SelectItem>
          <SelectItem value="2">Moyen</SelectItem>
          <SelectItem value="3">Difficile</SelectItem>
          <SelectItem value="4">Expert</SelectItem>
          <SelectItem value="5">Légendaire</SelectItem>
        </SelectContent>
      </Select>

      <label htmlFor="challengeCategoryId">Catégorie</label>
      <div>
        {challengeCategories.map((c) => {
          return (
            <Button
              key={c.id}
              type="button"
              onClick={() => toggleCategory(c.id)}
              style={{
                backgroundColor: c.colorCode,
                color: getTextColor(c.colorCode),
                // opacity: categoryId.includes(c.id) ? 1 : 0.4,
              }}
            >
              {c.name}
            </Button>
          );
        })}
      </div>
      <label htmlFor="goals">Goals?</label>
      <Input></Input>
      <label htmlFor="hints">Indices</label>
      <Textarea
        value={hintsCount}
        onChange={(e) => setHintsCount(e.target.value)}
        maxLength={MAX}
        id="hints"
      />
      <p>
        {hintsCount === "" ? "0" : hintsCount.length}/{MAX}
      </p>
      <p>⚠️ À Faire ⚠️ Démonstration - label demo</p>
    </form>
  );
}
