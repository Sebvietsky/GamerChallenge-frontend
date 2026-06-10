"use client";

import Image from "next/image";
import Link from "next/link";
import { useRegister } from "@/features/hooks/useRegister";
import { Controller } from "react-hook-form";
import { commonStyles as common } from "@/styles/common-auth.styles";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { countries } from "@/lib/countries";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function RegisterPage() {
  const { register, handleSubmit, control, errors, isSubmitting, error } =
    useRegister();

  return (
    <main className={common.main}>
      {/* Header register */}
      <div className={common.container}>
        <Link href="/">
          <Image
            className={common.logo}
            width={100}
            height={100}
            src="/images/logo.png"
            alt="Logo de Gamer Challenge"
            loading="eager"
          />
        </Link>
        <h1 className="text-2xl font-bold">Créer un compte</h1>
      </div>
      {/* Form */}
      <form className={common.form} onSubmit={handleSubmit} noValidate>
        {error && <p className="text-destructive text-sm">{error}</p>}

        <div className={common.labelContainer}>
          <label htmlFor="username">{"Nom d'utilisateur"}</label>
          <Input
            id="username"
            {...register("username")}
            autoComplete="username"
            placeholder="_-bestGamer-_"
          />
          {errors.username && (
            <p className="text-destructive text-xs">
              {errors.username.message}
            </p>
          )}
        </div>
        <div className={common.labelContainer}>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            autoComplete="email"
            placeholder="exemple@email.com"
          />
          {errors.email && (
            <p className="text-destructive text-xs">{errors.email.message}</p>
          )}
        </div>
        <div className={common.labelContainer}>
          <label htmlFor="password">Mot de passe</label>
          <Input
            autoComplete="new-password"
            id="password"
            {...register("password")}
            type="password"
          />
          {errors.password && (
            <p className="text-destructive text-xs">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className={common.labelContainer}>
          <label htmlFor="confirm">Confirmation de mot de passe</label>
          <Input
            id="confirm"
            {...register("confirm")}
            autoComplete="new-password"
            type="password"
          />
          {errors.confirm && (
            <p className="text-destructive text-xs">{errors.confirm.message}</p>
          )}
        </div>
        <div className={common.labelContainer}>
          <label htmlFor="country">Pays</label>
          <Controller
            name="country"
            control={control}
            defaultValue=""
            render={({ field }) => {
              return (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger id="country">
                    <SelectValue placeholder="Choisissez votre pays" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      // Code Country or Name Country
                      <SelectItem key={country.code} value={country.code}>
                        {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              );
            }}
          />
          {errors.country && (
            <p className="text-destructive text-xs">{errors.country.message}</p>
          )}
        </div>
        <Button
          className={common.submitButton}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? <Loader variant="classic-spinner" size="sm" /> : "Créer votre compte"}
        </Button>
      </form>
      {/* End Form */}
    </main>
  );
}
