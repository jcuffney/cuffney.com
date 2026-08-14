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
          <p className="overline">Staff Software Engineer · Builder</p>
          <h1>Joseph Cuffney</h1>
          <p className="lede">
            Ten-plus years shipping production platforms at Coinbase and Nike —
            and Rust firmware, custom PCBs, and agentic AI systems as a maker.
            I bring software rigor to the physical world.
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
        <p>&copy; 2026 Joseph Cuffney &middot; Rochester, NY</p>
      </footer>
    </>
  );
}
