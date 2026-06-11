"use client";

import { Input } from "@/components/ui/input";
import { RequiredStar } from "./RequiredStar";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { challengeCategories } from "@/lib/challenge-category";
import { useCreateChallenge } from "@/features/hooks/useCreateChallenge";
import { GameSearchInput } from "@/components/GameSeachInput";
import { createFormStyles as styles } from "@/styles/create-form.styles";
import { cn } from "@/lib/utils";

export function CreateChallenge() {
  const { form, onSubmit } = useCreateChallenge();
  const {
    register,
    watch,
    formState: { errors },
  } = form;
  const description = watch("description") ?? "";
  const goals = watch("goals") ?? "";
  const hints = watch("hints") ?? "";

  const MAX = 500;

  return (
    <form onSubmit={onSubmit} className={styles["cc-form"]}>
      <label
        htmlFor="title"
        className={`${styles["cc-label"]} ${styles["cc-label--title"]}`}
      >
        Titre<RequiredStar />
      </label>
      <Input
        {...register("title")}
        name="title"
        id="title"
        placeholder="Le titre de ton challenge"
        className={`${styles["cc-input"]} ${styles["cc-input--title"]}`}
      />
      {errors.title && (
        <p className={`${styles["cc-error"]} ${styles["cc-error--title"]}`}>
          {errors.title.message}
        </p>
      )}

      <label
        htmlFor="igdbId"
        className={`${styles["cc-label"]} ${styles["cc-label--igdbId"]}`}
      >
        Jeu<RequiredStar />
      </label>
      <div className={`${styles["cc-field"]} ${styles["cc-field--igdbId"]}`}>
        <Controller
          name="igdbId"
          control={form.control}
          render={({ field }) => (
            <GameSearchInput value={field.value} onChange={field.onChange} />
          )}
        />
      </div>
      {errors.igdbId && (
        <p className={`${styles["cc-error"]} ${styles["cc-error--igdbId"]}`}>
          {errors.igdbId.message}
        </p>
      )}

      <label
        htmlFor="description"
        className={`${styles["cc-label"]} ${styles["cc-label--description"]}`}
      >
        Description<RequiredStar />
      </label>
      <Textarea
        {...register("description")}
        className={cn(
          styles["cc-textarea"],
          styles["cc-textarea--description"],
        )}
        maxLength={MAX}
        id="description"
        name="description"
        placeholder="Décris ce qui ta donner envie de crée ce challenge"
      />
      <p
        className={`${styles["cc-counter"]} ${styles["cc-counter--description"]}`}
      >
        {description.length}/{MAX}
      </p>
      {errors.description && (
        <p
          className={`${styles["cc-error"]} ${styles["cc-error--description"]}`}
        >
          {errors.description.message}
        </p>
      )}

      <label
        htmlFor="goals"
        className={`${styles["cc-label"]} ${styles["cc-label--goals"]}`}
      >
        Objectif
      </label>
      <Textarea
        {...register("goals")}
        className={cn(styles["cc-textarea"], styles["cc-textarea--goals"])}
        maxLength={MAX}
        id="goals"
        name="goals"
        placeholder="Décris l'objectif à réaliser"
      />
      <p className={`${styles["cc-counter"]} ${styles["cc-counter--goals"]}`}>
        {goals.length}/{MAX}
      </p>
      {errors.goals && (
        <p className={`${styles["cc-error"]} ${styles["cc-error--goals"]}`}>
          {errors.goals.message}
        </p>
      )}

      <label
        htmlFor="difficultyId"
        className={`${styles["cc-label"]} ${styles["cc-label--difficulty"]}`}
      >
        Difficulté<RequiredStar />
      </label>
      <div
        className={`${styles["cc-field"]} ${styles["cc-field--difficulty"]}`}
      >
        <Controller
          control={form.control}
          name="difficultyId"
          render={({ field }) => (
            <Select
              onValueChange={(value) => field.onChange(Number(value))}
              value={field.value != null ? String(field.value) : undefined}
            >
              <SelectTrigger
                className={`${styles["cc-select-trigger"]} ${styles["cc-select-trigger--difficulty"]}`}
              >
                <SelectValue placeholder="Choisissez la difficulté" />
              </SelectTrigger>
              <SelectContent
                className={`${styles["cc-select-content"]} ${styles["cc-select-content--difficulty"]}`}
              >
                <SelectItem value="1" className={`${styles["cc-select-item"]}`}>
                  Facile
                </SelectItem>
                <SelectItem value="2" className={`${styles["cc-select-item"]}`}>
                  Moyen
                </SelectItem>
                <SelectItem value="3" className={`${styles["cc-select-item"]}`}>
                  Difficile
                </SelectItem>
                <SelectItem value="4" className={`${styles["cc-select-item"]}`}>
                  Expert
                </SelectItem>
                <SelectItem value="5" className={`${styles["cc-select-item"]}`}>
                  Légendaire
                </SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>
      {errors.difficultyId && (
        <p
          className={`${styles["cc-error"]} ${styles["cc-error--difficulty"]}`}
        >
          {errors.difficultyId.message}
        </p>
      )}

      <div
        className={`${styles["cc-field-group"]} ${styles["cc-field-group--category"]} flex flex-col gap-2`}
      >
        <label
          htmlFor="challengeCategoryId"
          className={`${styles["cc-label"]} ${styles["cc-label--category"]}`}
        >
          Catégorie<RequiredStar />
        </label>
        <Controller
          name="challengeCategoryId"
          control={form.control}
          render={({ field }) => (
            <Select
              onValueChange={(value) => field.onChange(Number(value))}
              value={field.value ? String(field.value) : undefined}
            >
              <SelectTrigger
                id="challengeCategoryId"
                className={`${styles["cc-select-trigger"]} ${styles["cc-select-trigger--category"]}`}
              >
                <SelectValue placeholder="Choisissez une catégorie" />
              </SelectTrigger>
              <SelectContent
                className={`${styles["cc-select-content"]} ${styles["cc-select-content--category"]}`}
              >
                {challengeCategories.map((c) => (
                  <SelectItem
                    key={c.id}
                    value={String(c.id)}
                    className={`${styles["cc-select-item"]} ${styles["cc-select-item--category"]}`}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className="inline-block w-3 h-3 rounded-full"
                        style={{ backgroundColor: c.colorCode }}
                      />
                      {c.id}
                      {" - "}
                      {c.name}
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.challengeCategoryId && (
          <p
            className={`${styles["cc-error"]} ${styles["cc-error--category"]}`}
          >
            {errors.challengeCategoryId.message}
          </p>
        )}
      </div>

      <label
        htmlFor="hints"
        className={`${styles["cc-label"]} ${styles["cc-label--hints"]}`}
      >
        Indices
      </label>
      <Textarea
        {...register("hints")}
        maxLength={MAX}
        className={cn(styles["cc-textarea"], styles["cc-textarea--hints"])}
        id="hints"
        name="hints"
        placeholder="Décris comment réaliser ton challenge"
      />
      <p className={`${styles["cc-counter"]} ${styles["cc-counter--hints"]}`}>
        {hints.length}/{MAX}
      </p>
      {errors.hints && (
        <p className={`${styles["cc-error"]} ${styles["cc-error--hints"]}`}>
          {errors.hints.message}
        </p>
      )}

      <label htmlFor="demo"
        className={"cc-label"}
      >
        Démonstration
      </label>
      <Input 
      placeholder="https://youtube.com/watch?v=..."
      {...register("demo")}
      />

      <p className="ml-2 text-xs text-text-muted font-light"><RequiredStar /> {": champs requis"}</p>
      <Button
        type="submit"
        className={`${styles["cc-button"]} ${styles["cc-button--submit"]}`}
      >
        Créer ton challenge
      </Button>
    </form>
  );
}
