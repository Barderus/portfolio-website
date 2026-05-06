import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { contactLinks, highlightStats, navItems, pageContent } from "../content";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const orbitItems = ["Forecasting", "Aviation", "Teaching", "Research"];

function HomePage() {
  const featuredSections = navItems.slice(0, 4).map((entry) => ({
    ...entry,
    eyebrow: pageContent[entry.path.slice(1)]?.eyebrow,
  }));

  return (
    <>
      <motion.section
        className="hero"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="hero-grid">
          <div className="hero-primary">
            <motion.p className="hero-kicker" variants={item}>
              Computer Science graduate with minors in data science and mathematics
            </motion.p>
            <motion.h1 variants={item}>Data science, applied with range.</motion.h1>
            <motion.p className="hero-copy" variants={item}>
              Projects, research, teaching, and writing presented with clearer motion,
              stronger hierarchy, and a faster path into the work.
            </motion.p>

            <motion.div className="hero-actions" variants={item}>
              <Link className="button button-primary" to="/projects">
                Explore projects
              </Link>
              <Link className="button button-secondary" to="/research">
                View research
              </Link>
            </motion.div>

            <motion.div className="hero-summary" variants={item}>
              <div className="hero-summary-line" />
              <p>
                Focused on predictive modeling, aviation systems, and practical
                instruction that turns technical work into something understandable.
              </p>
            </motion.div>
          </div>

          <motion.aside className="hero-visual-panel" variants={item}>
            <div className="hero-visual-glow hero-visual-glow-one" />
            <div className="hero-visual-glow hero-visual-glow-two" />
            <div className="hero-visual-header">
              <span className="hero-visual-label">Current signal</span>
              <strong>Portfolio overview</strong>
            </div>

            <div className="hero-orbit" aria-hidden="true">
              <div className="hero-orbit-core">
                <span>Data</span>
                <strong>Science</strong>
              </div>
              {orbitItems.map((label, index) => (
                <motion.div
                  key={label}
                  className={`orbit-chip orbit-chip-${index + 1}`}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4.2 + index * 0.35,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {label}
                </motion.div>
              ))}
            </div>

            <div className="hero-section-list">
              {featuredSections.map((entry) => (
                <Link key={entry.path} className="hero-section-link" to={entry.path}>
                  <span>{entry.label}</span>
                  <strong>{entry.eyebrow}</strong>
                </Link>
              ))}
            </div>
          </motion.aside>
        </div>

        <motion.div className="stats-grid" variants={container}>
          {highlightStats.map((stat) => (
            <motion.div className="stat-card" key={stat.label} variants={item}>
              <span>{stat.value}</span>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="contact-panel" variants={item}>
          <div className="contact-panel-header">
            <p className="contact-label">Contact</p>
            <p className="contact-caption">Direct paths for collaboration, updates, and portfolio follow-up.</p>
          </div>
          <div className="contact-links">
            {contactLinks.map((entry) =>
              entry.href ? (
                <a
                  key={entry.label}
                  className="contact-link"
                  href={entry.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{entry.label}</span>
                  <strong>{entry.value}</strong>
                </a>
              ) : (
                <div key={entry.label} className="contact-link contact-link-static">
                  <span>{entry.label}</span>
                  <strong>{entry.value}</strong>
                </div>
              ),
            )}
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}

export default HomePage;
