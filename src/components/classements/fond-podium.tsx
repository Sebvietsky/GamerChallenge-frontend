export function FondPodium() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--surface-accent)]/20" />
      <div className="absolute -bottom-8 left-6 h-24 w-24 rounded-full bg-[var(--brand-secondary)]/10" />
      <div className="absolute -bottom-10 right-8 h-28 w-28 rounded-full bg-[var(--brand-secondary)]/12" />
      <div className="absolute top-8 left-10 h-2 w-2 rounded-full bg-[var(--brand-gold)]" />
      <div className="absolute top-16 right-12 h-2 w-2 rounded-full bg-[var(--brand-gold)]" />
      <div className="absolute bottom-12 left-28 h-1.5 w-1.5 rounded-full bg-[var(--brand-gold)]" />
      <div className="absolute bottom-16 right-24 h-1.5 w-1.5 rounded-full bg-[var(--brand-gold)]" />
    </div>
  );
}
