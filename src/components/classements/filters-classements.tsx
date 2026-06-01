import { type LucideIcon } from "lucide-react";
import { classementsStyles as styles } from "@/styles/classements.styles";
import { ClassementType } from "./ClassementType";

type FilterOption = {
  id: ClassementType;
  icon: LucideIcon;
  title: string;
  description: string;
};

export function FiltersClassements({
  options,
  active,
  onChange,
}: {
  options: readonly FilterOption[];
  active: ClassementType;
  onChange: (value: ClassementType) => void;
}) {
  return (
    <div className={styles.filters}>
      {options.map((option) => {
        const Icon = option.icon;
        const isActive = option.id === active;

        return (
          <button
            key={option.id}
            type="button"
            className={isActive ? styles.filterCardActive : styles.filterCard}
            onClick={() => onChange(option.id)}
          >
            <span
              className={isActive ? styles.filterIconActive : styles.filterIcon}
            >
              <Icon className="size-5" />
            </span>
            <div className={styles.filterTitle}>{option.title}</div>
            <p className={styles.filterSubtitle}>{option.description}</p>
          </button>
        );
      })}
    </div>
  );
}
