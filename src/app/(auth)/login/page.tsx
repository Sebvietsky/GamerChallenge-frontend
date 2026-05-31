"use client"

import { useActionState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { loginStyles as styles } from "@/styles/login.styles";
import { commonStyles as common } from "@/styles/common-auth.styles";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [error, formAction, isPending] = useActionState(
    async (_: unknown, formData: FormData) => {
      try {
        await login({
          email: formData.get("email") as string,
          password: formData.get("password") as string,
        });
        router.push("/dashboard");
        return null;
      } catch (err) {
        return err instanceof Error ? err.message : "Erreur inconnue";
      }
    },
    null
  );

  return (
    <main className={common.main}>
      {/* Header Login */}
      <div className={common.container}>
        <Link href="/">
          <Image className={common.logo} width={100} height={100} src="/images/logo.png" alt="Logo Gamer Challenge" loading="eager"/>
        </Link>
        <h1 className={common.h1}>Connection</h1>
        <p className={common.p}>Connectez-vous à votre compte</p>
      </div>
      {/* Form Login */}
      <form action={formAction} className={common.form} noValidate>
        {error && <p className="text-destructive text-sm">{error}</p>}
        <div className={common.labelContainer}>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="monemail@mail.com"
            required
          />
        </div>
        <div className={common.labelContainer}>
          <label htmlFor="password">Mot de passe</label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="monMotdePasse!"
            required
          />
        </div>
        <Button type="submit" className={common.submitButton} disabled={isPending}>
          {isPending ? "Connexion..." : "Se connecter"}
        </Button>
      </form>
      {/* Footer Login */}
      <p className={styles.pSoft}>
        Pas encore de compte ?{" "}
        <Link className={common.link} href="/register">
          Créer un compte
        </Link>
      </p>
    </main>
  );
}
