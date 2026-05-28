"use-client"

import Image from "next/image";
import Link from "next/link";
import { commonStyles as common} from "@/styles/common-auth.styles";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { countries } from "@/lib/countries";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// .object({
//     username: z.string().min(2),
//     email: z.email(),
//     password: z
//       .string()
//       .min(12)
//       .max(100)
//       .regex(/[a-z]/, "Password must contain at least one lowercase caracter")
//       .regex(/[A-Z]/, "Password must contain at least one uppercase caracter")
//       .regex(/[0-9]/, "Password must contain at least one number"),
//     confirm: z.string(),
//     country: z.string().optional(),
//     bio: z.string().optional(),
//     profilePicture: z.string().optional(),
//   })


export default function RegisterPage() {
  return (
    <main className={common.main}>
      <div className={common.container}>
        <Link href="/">
        <Image className={common.logo} width={100} height={100} src="/images/logo.png" alt="Logo de Gamer Challenge" loading="eager"/>
        </Link>
        <h1 className="text-2xl font-bold">Créer un compte</h1>
      </div>
      <form className={common.form} action="submit">
        <div className={common.labelContainer}>
          <label htmlFor="username">Nom d'utilisateur</label>
          <Input
          placeholder="Nom de compte"
          required
          />
        </div>
        <div className={common.labelContainer}>
          <label htmlFor="email">Email</label>
          <Input 
          required
          />
        </div>
        <div className={common.labelContainer}>
          <label htmlFor="password">Mot de passe</label>
          <Input 
          required
          />
        </div>
        <div className={common.labelContainer}>
          <label htmlFor="confirm">Confirmation de mot de passe</label>
          <Input 
          required
          />
        </div>
        <div className={common.labelContainer}>
          <label htmlFor="country">Pays</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Choisissez votre pays" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country.code} value={country.code}>
                  {country.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className={common.labelContainer}>
          <label htmlFor="bio">Biograhpie</label>
          <Textarea placeholder="Ecrivez votre biographie ici"/>
        </div>
        <div className={common.labelContainer}>
          <label htmlFor="profilPicture">Photo de profil</label>
          <Input type="file"/>
        </div>
        <Button className={common.submitButton} type="submit">Créez votre compte</Button>
      </form>
    </main>
  );
}
