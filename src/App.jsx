import { useState } from "react";

const profile = {
  name: "Yuxi Zheng",
  subtitle: "Researcher",
  affiliation: "Institution / University",
  location: "City, Country",
  email: "yuxi.zheng@example.com",
  scholarUrl: "#",
  githubUrl: "#",
  websiteUrl: "#",
};

const links = [
  { label: "Google Scholar", href: profile.scholarUrl },
  { label: "GitHub", href: profile.githubUrl },
];

const researchInterests = [
  "Research area 1",
  "Research area 2",
  "Research area 3",
  "Research area 4",
];

const publications = [
  {
    title: "Add a selected publication here",
    venue: "Conference / Journal / Preprint, Year",
    authors: "Yuxi Zheng, Coauthor Name",
    abstract:
      "Add a short abstract here. The homepage should show only the most useful summary: what problem the paper studies, the main result, and why the result matters.",
    links: [
      { label: "paper", href: "#" },
      { label: "bibtex", href: "#" },
    ],
  },
  {
    title: "Add another selected publication here",
    venue: "Conference / Journal / Preprint, Year",
    authors: "Author list",
    abstract:
      "A compact abstract can be hidden by default and expanded by the reader. This keeps the page clean while still allowing detail.",
    links: [{ label: "paper", href: "#" }],
  },
];

const teaching = [
  "Year · Institution · Teaching Assistant / Instructor · Course Name",
  "Year · Institution · Mentoring / Course project / Seminar",
  "Add another course, review session, or mentoring activity here.",
];

const miscellaneous = [
  "Add a short personal note here.",
  "This section can later become notes, blog posts, or useful links.",
];

function Header() {
  return (
    <header className="site-header">
      <nav aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#publications">Publications</a>
        <a href="#teaching">Teaching</a>
        <a href="#misc">Miscellaneous</a>
      </nav>
    </header>
  );
}

function Portrait() {
  return (
    <div className="portrait" aria-label={`${profile.name} portrait placeholder`}>
      <span>YZ</span>
    </div>
  );
}

function Publication({ paper }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="publication">
      <h3>{paper.title}</h3>
      <p className="venue">{paper.venue}</p>
      <p className="authors">{paper.authors}</p>

      <div className="paper-links">
        {paper.links.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
        <button type="button" onClick={() => setOpen(!open)}>
          {open ? "hide abstract" : "abstract"}
        </button>
      </div>

      {open && <p className="abstract">{paper.abstract}</p>}
    </article>
  );
}

export default function App() {
  return (
    <>
      <style>{styles}</style>

      <main className="page">
        <Header />

        <section id="about" className="hero section">
          <Portrait />

          <div className="intro">
            <h1>{profile.name}</h1>

            <p className="subtitle">
              {profile.subtitle}, {profile.affiliation}
            </p>

            <p>
              I am a researcher interested in problems at the intersection of
              theory, computation, and applications. This paragraph is a
              placeholder and can later be replaced with Yuxi's specific
              academic background, current position, advisors, and research
              direction.
            </p>

            <p>
              My research interests include{" "}
              {researchInterests.slice(0, -1).join(", ")} and{" "}
              {researchInterests[researchInterests.length - 1]}.
            </p>

            <p>
              I enjoy working on clean mathematical ideas and building tools
              that make technical concepts easier to understand, communicate,
              and use.
            </p>

            <p className="contact">
              Email: <a href={`mailto:${profile.email}`}>{profile.email}</a>
              {links.map((link) => (
                <span key={link.label}>
                  <span className="dot"> · </span>
                  <a href={link.href}>{link.label}</a>
                </span>
              ))}
            </p>
          </div>
        </section>

        <section id="publications" className="section">
          <h2>Publications</h2>

          <div className="publication-list">
            {publications.map((paper) => (
              <Publication key={paper.title} paper={paper} />
            ))}
          </div>
        </section>

        <section id="teaching" className="section">
          <h2>Teaching</h2>

          <ul>
            {teaching.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="misc" className="section">
          <h2>Miscellaneous</h2>

          <ul>
            {miscellaneous.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <footer>
          © {new Date().getFullYear()} {profile.name}
        </footer>
      </main>
    </>
  );
}

const styles = `
:root {
  --background: #ffffff;
  --text: #222222;
  --muted: #555555;
  --link: #1f5f9f;
  --line: #dddddd;
  --max-width: 900px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--background);
  color: var(--text);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.55;
}

a {
  color: var(--link);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.page {
  width: min(var(--max-width), calc(100% - 40px));
  margin: 0 auto;
  padding: 28px 0 48px;
}

.site-header {
  margin-bottom: 42px;
}

.site-header nav {
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
}

.site-header a {
  font-size: 1rem;
}

.section {
  margin-bottom: 36px;
  scroll-margin-top: 30px;
}

.hero {
  display: grid;
  grid-template-columns: 190px 1fr;
  gap: 34px;
  align-items: start;
}

.portrait {
  width: 190px;
  height: 225px;
  display: grid;
  place-items: center;
  background: #f2f2f2;
  color: #666666;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.8rem;
}

.portrait span {
  width: 82px;
  height: 82px;
  display: grid;
  place-items: center;
  border: 1px solid #d4d4d4;
  border-radius: 50%;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  margin-bottom: 10px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 2.45rem;
  line-height: 1.12;
  font-weight: 500;
}

h2 {
  margin-bottom: 14px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.55rem;
  font-weight: 500;
}

h3 {
  margin-bottom: 5px;
  font-size: 1rem;
  line-height: 1.45;
  font-weight: 600;
}

.subtitle {
  margin-bottom: 22px;
  color: var(--muted);
}

.intro p {
  max-width: 68ch;
}

.contact {
  margin-top: 20px;
}

.dot {
  color: var(--muted);
}

.publication-list {
  display: grid;
  gap: 22px;
}

.publication {
  margin-bottom: 4px;
}

.venue {
  margin-bottom: 4px;
}

.authors {
  margin-bottom: 6px;
  color: var(--muted);
}

.paper-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 6px;
}

.paper-links a::before,
.paper-links button::before {
  content: "[";
  color: var(--text);
}

.paper-links a::after,
.paper-links button::after {
  content: "]";
  color: var(--text);
}

.paper-links button {
  border: none;
  background: none;
  color: var(--link);
  padding: 0;
  font: inherit;
  cursor: pointer;
}

.paper-links button:hover {
  text-decoration: underline;
}

.abstract {
  max-width: 78ch;
  margin-top: 10px;
}

ul {
  margin-top: 0;
  padding-left: 1.25rem;
}

li {
  margin-bottom: 6px;
}

footer {
  margin-top: 42px;
  color: var(--muted);
  font-size: 0.95rem;
}

@media (max-width: 720px) {
  .page {
    width: min(100% - 28px, var(--max-width));
    padding-top: 22px;
  }

  .site-header {
    margin-bottom: 32px;
  }

  .site-header nav {
    gap: 14px;
  }

  .hero {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .portrait {
    width: 190px;
    height: 225px;
  }

  h1 {
    font-size: 2.15rem;
  }
}
`;
