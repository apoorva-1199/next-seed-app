import Title from "../../components/title";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Title title={"This is the Home page"} />
    </main>
  );
}
