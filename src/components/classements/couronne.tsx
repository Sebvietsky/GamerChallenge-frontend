import { Crown } from "lucide-react";

const crownColors = {
  gold: "var(--brand-gold)",
  silver: "rgb(163, 163, 163)",
  bronze: "rgb(168, 99, 27)",
} as const;

export function Couronne({ color }: { color: "gold" | "silver" | "bronze" }) {
  return (
    <div
      className="inline-flex items-center justify-center text-[1.7rem]"
      style={{ color: crownColors[color] }}
    >
      <Crown className="size-6" />
    </div>
  );
}
