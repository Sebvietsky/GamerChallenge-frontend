import Image from "next/image";
import Link from "next/link";

export default function UnauthorizedPage() {
  return (
      <div className="flex flex-col w-full max-w-md rounded-lg border bg-background/45 p-5 items-center">
        <Link href="/">
          <Image className="h-50 w-50" width={100} height={100} src="/images/logo.png" alt="Logo de Gamer Challenge" loading="eager" />
        </Link>
        <h1 className="font-semibold text-3xl text-text">Accès refusé</h1>
        <p className="text-text-muted">{"Tu n'as pas les droits pour accéder à cette page."}</p>
      </div>
  )
}