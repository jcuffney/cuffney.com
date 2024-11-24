import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
      </header>
      <main className={styles.main}>
        <h2 className={styles.headline}>
          <span className={styles.brackets}>{"{"}{"{"}</span>
          <span>Joe Cuffney</span>
          <span className={styles.brackets}>{"}"}{"}"}</span>
        </h2>
        <section className={styles.tagline}>
          <p>Senior Software Engineer.</p>
          <p>Specializing in React, NodeJS, and Rust.</p>
        </section>
        <section className={styles.links}>
          <a href="https://github.com/jcuffney" target="_blank" rel="noopener noreferrer">
            <span>Github</span> <span>-&gt;</span>
          </a>
          <a href="https://projects.cuffney.com" target="_blank" rel="noopener noreferrer">
            <span>Projects</span> <span>-&gt;</span>
          </a>
          <a href="https://resume.cuffney.com" target="_blank" rel="noopener noreferrer">
            <span>Resume</span> <span>-&gt;</span>
          </a>
          <a href="https://www.linkedin.com/in/cuffney/" target="_blank" rel="noopener noreferrer">
            <span>Linkedin</span> <span>-&gt;</span>
          </a>
        </section>
      </main>
      <footer>
      </footer>
    </div>
  );
}
