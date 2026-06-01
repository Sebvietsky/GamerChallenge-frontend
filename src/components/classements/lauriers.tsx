export function Lauriers({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" fill="none" className={className}>
      <g stroke="currentColor" strokeWidth="4">
        <path d="M50 100 C20 70 20 30 50 10" />
        <path d="M150 100 C180 70 180 30 150 10" />
      </g>

      <g fill="currentColor">
        <ellipse cx="40" cy="85" rx="5" ry="10" />
        <ellipse cx="32" cy="70" rx="5" ry="10" />
        <ellipse cx="28" cy="55" rx="5" ry="10" />
        <ellipse cx="32" cy="40" rx="5" ry="10" />
        <ellipse cx="42" cy="25" rx="5" ry="10" />

        <ellipse cx="160" cy="85" rx="5" ry="10" />
        <ellipse cx="168" cy="70" rx="5" ry="10" />
        <ellipse cx="172" cy="55" rx="5" ry="10" />
        <ellipse cx="168" cy="40" rx="5" ry="10" />
        <ellipse cx="158" cy="25" rx="5" ry="10" />
      </g>
    </svg>
  );
}
