import { classementsStyles as styles } from "@/styles/classements.styles";
import { CardPodium } from "./card-podium";
import type { PodiumItem } from "./ClassementType";

export function ClassementPodium({ items }: { items: PodiumItem[] }) {
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
