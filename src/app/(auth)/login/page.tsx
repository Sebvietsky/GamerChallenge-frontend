"use-client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/Logo-Gamer-Challenge.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <main className="flex flex-col gap-6 p-6 max-w-sm mx-auto">
      <div className="flex flex-col items-center gap-2">
        <Link href="/">
          <Image
            className="h-16 w-16"
            src={logo}
            alt="Logo Gamer Challenge"
            loading="eager"
          />
        </Link>
        <h1 className="text-2xl font-bold font-heading">Login</h1>
        <p className="text-sm text-muted-foreground">Sign in to your account</p>
      </div>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="monemail@mail.com"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="password">Mot de passe</label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="monMotdePasse!"
          />
        </div>

        <Button type="submit" className="w-full mt-2 hover:brightness-110">
          Se connecter
        </Button>
      </form>

      <p className="text-center text-xs text-muted-foreground">
        Pas encore de compte ?{" "}
        <Link
          className="text-primary text hover:underline font-semibold"
          href="/register"
        >
          Créer un compte
        </Link>
      </p>
    </main>
  );
}
