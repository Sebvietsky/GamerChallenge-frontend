"use client";

// STYLES
import { homeStyles as styles } from "@/components/home/home.styles";
import type { HomeChallengeOrderBy } from "@/features/hooks/useHome";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  value: HomeChallengeOrderBy;
  onChange: (value: HomeChallengeOrderBy) => void;
}

export function SelectFilter({ value, onChange }: Props) {
  return (
    <Select
      value={value}
      onValueChange={(value) => onChange(value as HomeChallengeOrderBy)}
    >
      <SelectTrigger className={styles.sortSelect}>
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="votes">Tendances</SelectItem>
        <SelectItem value="createdAt">Plus récents</SelectItem>
        <SelectItem value="participations">Participations</SelectItem>
      </SelectContent>
    </Select>
  );
}
