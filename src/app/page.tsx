import { homeStyles as styles } from "@/components/home/styles/home.styles";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.layout}>
        {/* SIDEBAR */}

        <section className={styles.main}>
          <div className={styles.header}>
            <h1 className={styles.title}> Top Challenge Populaires </h1>
          </div>

          <div className={styles.cardsGrid}>
            {/* CHALLENGECARD */}
            {/* CHALLENGECARD */}
            {/* CHALLENGECARD */}
          </div>
        </section>
      </div>
    </main>
  );
}
