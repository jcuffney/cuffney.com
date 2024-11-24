import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2>Joe Cuffney</h2>

        <ul>
          <li>
            <a href="https://resume.cuffney.com" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
          <li>
            <a href="https://projects.cuffney.com" target="_blank" rel="noopener noreferrer">
              Projects
            </a>
          </li>
        </ul>
      </main>
      <footer></footer>
    </div>
  );
}
