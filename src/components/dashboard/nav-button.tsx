import Link from "next/link";
import { Button } from "../ui/button";
import { LucideIcon } from "lucide-react";

type Props = {
  label: string;
  path: string;
  icon: LucideIcon;
};

export function NavButton({ label, path, icon: Icon }: Props) {
  return (
    <Link href={path} className="w-full">
      <Button className="w-full justify-center">
        <Icon /> {label}
      </Button>
    </Link>
  );
}
