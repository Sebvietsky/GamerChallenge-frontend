import { Star } from "./star";

type BgPodiumProps = {
  variant: "gold" | "silver" | "bronze" | "default";
};

const variants = {
  gold: {
    glow: "bg-yellow-400/8",
    particles: "text-yellow-400/70",
  },

  silver: {
    glow: "bg-slate-400/8",
    particles: "text-slate-400/70",
  },

  bronze: {
    glow: "bg-amber-700/8",
    particles: "text-amber-700/70",
  },

  default: {
    glow: "bg-[var(--brand-primary)]/4",
    particles: "text-[var(--brand-primary)]/25",
  },
};

export function BgPodium({ variant }: BgPodiumProps) {
  const colors = variants[variant];

  const isPodium =
    variant === "gold" || variant === "silver" || variant === "bronze";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* halo principal */}
      <div
        className={`
          absolute
          left-1/2
          top-1/3
          h-72
          w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-3xl
          ${colors.glow}
        `}
      />

      {/* halo secondaire */}
      <div
        className={`
          absolute
          left-1/2
          top-1/2
          h-96
          w-96
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[120px]
          ${colors.glow}
        `}
      />

      {/* étoiles */}
      {isPodium && (
        <>
          <Star
            className={`absolute left-12 top-12 h-4 w-4 ${colors.particles}`}
          />

          <Star
            className={`absolute right-12 top-16 h-4 w-4 ${colors.particles}`}
          />

          <Star
            className={`absolute left-1/4 top-24 h-3 w-3 ${colors.particles}`}
          />

          <Star
            className={`absolute right-1/4 top-28 h-3 w-3 ${colors.particles}`}
          />

          <Star
            className={`absolute left-1/3 top-[70%] h-3 w-3 ${colors.particles}`}
          />

          <Star
            className={`absolute right-1/3 top-[75%] h-3 w-3 ${colors.particles}`}
          />

          <Star
            className={`absolute left-[18%] top-[55%] h-2.5 w-2.5 ${colors.particles}`}
          />

          <Star
            className={`absolute right-[18%] top-[60%] h-2.5 w-2.5 ${colors.particles}`}
          />
        </>
      )}
    </div>
  );
}
