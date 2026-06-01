import Link from "next/link"
import { Button } from "../ui/button"

type Props = {
  label: string,
  path: string,
  icon: any
}

export function NavButton({ label, path, icon: Icon }: Props) {
  return (
    <Link href={path}>
      <Button className="">
        <Icon /> {label}
      </Button>
    </Link>
  )
}