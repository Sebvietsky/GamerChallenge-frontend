type XPBarProps = {
  progress: number;
};

export function XPBar({ progress }: XPBarProps) {
  return (
    <div className="xp-bar">
      <div
        className="xp-bar-progress xp-bar-retro"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}
