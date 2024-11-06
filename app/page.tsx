import Image from "next/image";
import styles from "./page.module.css";
import BootstrapComponentsShowcase from "../bootstrap/showcase";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <h1 className={styles.title}>Bootstrap Components Showcase</h1>
        <BootstrapComponentsShowcase />
      </main>
    </div>
  );
}
