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
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { challengeCategories } from "@/lib/challenge-category";
import { getTextColor } from "@/lib/utils";
import { useCreateChallenge } from "@/features/hooks/useCreateChallenge";

export function CreateChallenge() {
  const { form, errors, categoryId, toggleCategory, onSubmit } =
    useCreateChallenge();
  const { register, watch, setValue } = form;
  const description = watch("description") ?? "";
  const goals = watch("goals") ?? "";
  const hints = watch("hints") ?? "";

  const MAX = 500;

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title">Titre</label>
      <Input {...register("title")} name="title" id="title" />
      {errors.title && <p>{errors.title.message}</p>}

      <label htmlFor="igbdId">Jeu</label>
      <Input />
      {errors.igbdId && <p>{errors.igbdId.message}</p>}

      <label htmlFor="description">Description</label>
      <Textarea
        {...register("description")}
        maxLength={MAX}
        id="description"
        name="description"
      />
      <p>
        {description.length}/{MAX}
      </p>
      {errors.description && <p>{errors.description.message}</p>}

      <label htmlFor="goals">Objectif</label>
      <Textarea
        {...register("goals")}
        maxLength={MAX}
        id="goals"
        name="goals"
      />
      <p>
        {goals.length}/{MAX}
      </p>
      {errors.goals && <p>{errors.goals.message}</p>}

      <label htmlFor="difficultyId">Difficulté</label>
      <Controller
        control={form.control}
        name="difficultyId"
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
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
        )}
      />
      {errors.difficultyId && <p>{errors.difficultyId.message}</p>}
      <label htmlFor="challengeCategoryId">Catégorie</label>
      <div>
        {challengeCategories.map((c) => {
          return (
            <Button
              aria-label={`Bouton de selection pour la catégories ${c.name}`}
              key={c.id}
              type="button"
              onClick={() => toggleCategory(String(c.id))}
              style={{
                backgroundColor: c.colorCode,
                color: getTextColor(c.colorCode),
                opacity: categoryId.includes(String(c.id)) ? 1 : 0.4,
              }}
              // variant={categoryId.includes(String(c.id)) ? "filterBouton" : "filterButtonAlt"}
            >
              {c.name}
            </Button>
          );
        })}
      </div>
      {errors.categoryId && <p>{errors.categoryId.message}</p>}

      <label htmlFor="hints">Indices</label>
      <Textarea
        {...register("hints")}
        maxLength={MAX}
        id="hints"
        name="hints"
      />
      <p>
        {hints.length}/{MAX}
      </p>
      {errors.hints && <p>{errors.hints.message}</p>}

      <p>⚠️ À Faire ⚠️ Démonstration - label demo</p>
      <Button type="submit">Créer ton challenge</Button>
    </form>
  );
}
