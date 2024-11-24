import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
      </header>
      <main className={styles.main}>
        <h2 className={styles.headline}>
          <span className={styles.brackets}>{"{"}{"{"}</span>
          Joe Cuffney
          <span className={styles.brackets}>{"}"}{"}"}</span>
        </h2>
        <section>
          <p>Senior Software Engineer.</p>
          <p>Specializing in React, NodeJS, and Rust.</p>
        </section>
        <section>
          <a href="https://github.com/jcuffney" target="_blank" rel="noopener noreferrer">
            Github -&gt;
          </a>
          <a href="https://projects.cuffney.com" target="_blank" rel="noopener noreferrer">
            Projects -&gt;
          </a>
          <a href="https://resume.cuffney.com" target="_blank" rel="noopener noreferrer">
            Resume -&gt;
          </a>
        </section>
      </main>
      <footer>
      </footer>
    </div>
  );
}
