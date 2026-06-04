"use client";

// STYLES
import { homeStyles as styles } from "@/components/home/home.styles";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ChallengeSort = "votes" | "createdAt" | "participations";

interface Props {
  value: ChallengeSort;
  onChange: (value: ChallengeSort) => void;
}

export function SelectFilter({ value, onChange }: Props) {
  return (
    <Select
      value={value}
      onValueChange={(value) => onChange(value as ChallengeSort)}
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
