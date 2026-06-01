import { classementsStyles as styles } from "@/styles/classements.styles";
import { CartePodium } from "./carte-podium";
import type { PodiumItem } from "./ClassementType";

export function ClassementPodium({ items }: { items: PodiumItem[] }) {
  const [first, second, third] = items;

  return (
    <div className={styles.podiumArea}>
      <CartePodium item={first} />
      <div className={styles.sideGrid}>
        <CartePodium item={second} compact />
        <CartePodium item={third} compact />
      </div>
    </div>
  );
}
