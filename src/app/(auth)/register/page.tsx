import Image from "next/image";
import Link from "next/link";
import { commonStyles as common} from "@/styles/common-auth.styles";
import { registerStyle as styles } from "@/styles/register.styles";
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

export default function RegisterPage() {
  return (
    <main className={common.main}>
      {/* Header register */}
      <div className={common.container}>
        <Link href="/">
        <Image className={common.logo} width={100} height={100} src="/images/logo.png" alt="Logo de Gamer Challenge" loading="eager"/>
        </Link>
        <h1 className="text-2xl font-bold">Créer un compte</h1>
      </div>
      {/* Form */}
      <form className={common.form} action="submit">
        <div className={common.labelContainer}>
          <label htmlFor="username">Nom d'utilisateur</label>
          <Input
          id="username"
          name="username"
          autoComplete="username"
          placeholder="Nom de compte"
          required
          />
        </div>
        <div className={common.labelContainer}>
          <label htmlFor="email">Email</label>
          <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="exemple@mail.com" 
          required
          />
        </div>
        <div className={common.labelContainer}>
          <label htmlFor="password">Mot de passe</label>
          <Input 
          autoComplete="new-password"
          id="password"
          name="password"
          type="password"
          required
          />
        </div>
        <div className={common.labelContainer}>
          <label htmlFor="confirm">Confirmation de mot de passe</label>
          <Input 
          id="confirm"
          name="confirm"
          autoComplete="new-password"
          type="password"
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
                // Code Country or Name Country
                <SelectItem key={country.code} value={country.name}> 
                  {country.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className={common.labelContainer}>
          <label htmlFor="bio">Biographie</label>
          <Textarea placeholder="Ecrivez votre biographie ici"/>
        </div>
        <div className={common.labelContainer}>
          <label htmlFor="profilPicture">Photo de profil</label>
          <Input
          id="profilPicture"
          name="profilPicture"
          type="file"
          accept="image/*"
          className={styles.imageInput}
          />
        </div>
        <Button className={common.submitButton} type="submit">Créez votre compte</Button>
      </form>
      {/* End Form */}
    </main>
  );
}
