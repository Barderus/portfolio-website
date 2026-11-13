import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

const education = [
  {
    institution: "Lewis University",
    credential: "B.S. Computer Science · Data Science & Mathematics Minors · 2025",
  },
  {
    institution: "College of DuPage",
    credential: "A.A.S. Software Development · 2024",
  },
];

const exploreLinks = [
  { label: "Research & Projects", to: "/work" },
  { label: "Teaching & Mentorship", to: "/teaching" },
  { label: "Contact", to: "/contact" },
];

function AboutPage() {
  return (
    <motion.section
      className="section page-detail about-page"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About" }]} />

      <header className="about-header">
        <p>About</p>
        <h1>About Me</h1>
      </header>

      <div className="about-narrative">
        <p>
          I&apos;m Gabriel dos Reis, a Computer Science graduate from Lewis University with minors
          in Data Science and Mathematics. Originally from Brazil, I moved to the United States
          to pursue my education and explore opportunities in technology.
        </p>
        <p>
          My academic journey started at College of DuPage, where I studied Software Development
          before transferring to Lewis University through the 3+1 program. During my time at Lewis,
          I became involved in research, exploring how machine learning and computational methods
          can be applied to problems in economics, aviation, and other complex systems.
        </p>
        <p>
          Today, I work as an Adjunct Faculty / Teaching Assistant at College of DuPage, supporting
          students in programming and database courses. I&apos;m also preparing to pursue graduate
          research, with a particular interest in reinforcement learning, multi-agent systems, and
          intelligent decision-making.
        </p>
      </div>

      <section className="about-section" aria-labelledby="background-heading">
        <h2 id="background-heading">My Background</h2>
        <div className="education-list">
          {education.map((item) => (
            <article className="education-entry" key={item.institution}>
              <h3>{item.institution}</h3>
              <p>{item.credential}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section about-beyond" aria-labelledby="beyond-heading">
        <h2 id="beyond-heading">Beyond Academics</h2>
        <p>
          Outside of programming and research, I enjoy tabletop RPGs, Dungeons &amp; Dragons,
          video games, and game design. I also volunteer with wildlife care, an experience that
          allows me to pursue my interest in animals and conservation.
        </p>
      </section>

      <nav className="about-section about-explore" aria-labelledby="explore-heading">
        <h2 id="explore-heading">Explore More</h2>
        <div className="about-link-list">
          {exploreLinks.map((item) => (
            <Link to={item.to} key={item.to}>
              <span>{item.label}</span>
              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </nav>
    </motion.section>
  );
}

export default AboutPage;
