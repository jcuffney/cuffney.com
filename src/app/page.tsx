import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2>Joe Cuffney</h2>

        <ul>
          <li>
            <a href="resume.cuffney.com" target="_blank">
              Resume
            </a>
          </li>
          <li>
            <a href="resume.cuffney.com" target="_blank">
              Projects
            </a>
          </li>
        </ul>
      </main>
      <footer></footer>
    </div>
  );
}
