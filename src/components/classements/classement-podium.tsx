import { classementsStyles as styles } from "@/styles/classements.styles";
import { CardPodium } from "./card-podium";
import type { PodiumItem } from "./ClassementType";

interface Props {
  items: PodiumItem[];
}

export function ClassementPodium({ items }: Props) {
  if (items.length < 3) {
    return null;
  }

  const [first, second, third] = items;

  return (
    <div className={styles.podiumArea}>
      <CardPodium item={first} />

      <div className={styles.sideGrid}>
        <CardPodium item={second} compact />
        <CardPodium item={third} compact />
      </div>
    </div>
  );
}
