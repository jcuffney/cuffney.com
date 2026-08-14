import "./styles.css";

const LINKS = [
  { label: "GitHub", href: "https://github.com/jcuffney" },
  { label: "Resume", href: "https://resume.cuffney.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/cuffney/" },
  { label: "Contact", href: "mailto:josephcuffney@gmail.com" },
];

export default function App() {
  return (
    <>
      <main>
        <header className="intro">
          <p className="overline">Frontend Engineer</p>
          <h1>Joe Cuffney</h1>
          <p className="lede">
            I build for the web — with a weakness for good typography, fast
            pages, and the small details that make software feel considered.
          </p>
        </header>

        <nav aria-label="Profiles and contact">
          <ul className="index">
            {LINKS.map(({ label, href }, i) => (
              <li key={label}>
                <a href={href}>
                  <span className="num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="label">{label}</span>
                  <span className="arrow" aria-hidden="true">
                    &#8599;
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </main>

      <footer>
        <p>&copy; 2026 Joe Cuffney &middot; hand-built with React</p>
      </footer>
    </>
  );
}
