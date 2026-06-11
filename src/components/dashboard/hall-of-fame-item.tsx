import Image from "next/image";
import Link from "next/link";

import { Heart } from "lucide-react";

type HallOfFameItemProps = {
  href: string;
  image?: string | null;
  title: string;
  votes: number;
};

export function HallOfFameItem({
  href,
  image,
  title,
  votes,
}: HallOfFameItemProps) {
  return (
    <Link href={href}>
      <div className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-muted/50">
        <Image
          src={image ?? "/images/image-not-found.png"}
          alt={title}
          width={96}
          height={96}
          className="rounded-md object-cover"
        />

        <div className="flex flex-1 items-center justify-between">
          <div>
            <h3 className="font-semibold">{title}</h3>
          </div>

          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            <span>{votes}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
