import "./styles.css";

const LINKS = [
  { label: "GitHub", href: "https://github.com/jcuffney", me: true },
  { label: "Resume", href: "https://resume.cuffney.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/cuffney/", me: true },
  { label: "Contact", href: "mailto:josephcuffney@gmail.com" },
];

export default function App() {
  return (
    <>
      <main>
        <header className="intro">
          <p className="overline">Forward Deployed Engineer ·&nbsp;Hardware</p>
          <h1>Joseph Cuffney</h1>
          <p className="lede">
            Staff engineer with 10+ years shipping production platforms at
            Coinbase and Nike. I embed with the people who have the problem,
            build the system, and stay until it works in the real world —
            from agentic AI and cloud platforms down to Rust firmware and
            custom PCBs.
          </p>
        </header>

        <nav aria-label="Profiles and contact">
          <ul className="index">
            {LINKS.map(({ label, href, me }, i) => (
              <li key={label}>
                <a href={href} rel={me ? "me" : undefined}>
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
