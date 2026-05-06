import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PortfolioCard from "../components/PortfolioCard";
import {
  contactCards,
  featuredProjects,
  focusAreas,
  heroStats,
  homeHighlights,
  pageContent,
  profileLinks,
  siteIdentity,
} from "../content";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const heroLinks = [
  { label: "View Projects", to: "/projects", variant: "primary" },
  {
    label: "View Resume",
    href: profileLinks.resume.href,
    variant: "secondary",
    placeholder: profileLinks.resume.placeholder,
  },
  { label: "GitHub", href: profileLinks.github.href, variant: "secondary" },
  { label: "LinkedIn", href: profileLinks.linkedin.href, variant: "secondary" },
];

function HeroButton({ link }) {
  const className = link.variant === "secondary" ? "button button-secondary" : "button button-primary";

  if (link.placeholder || !link.href && !link.to) {
    return (
      <span className={`${className} button-disabled`} aria-disabled="true">
        {link.label}
      </span>
    );
  }

  if (link.to) {
    return (
      <Link className={className} to={link.to}>
        {link.label}
      </Link>
    );
  }

  return (
    <a className={className} href={link.href} target="_blank" rel="noreferrer">
      {link.label}
    </a>
  );
}

function HomePage() {
  return (
    <div className="home-page">
      <motion.section
        className="hero"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="hero-grid">
          <div className="hero-primary">
            <motion.p className="hero-kicker" variants={item}>
              {siteIdentity.name} | {siteIdentity.role}
            </motion.p>
            <motion.h1 variants={item}>
              I build data-driven projects at the intersection of machine learning,
              research, teaching, and real-world decision making.
            </motion.h1>
            <motion.p className="hero-copy" variants={item}>
              My work spans recession prediction, aviation route modeling, sports
              analytics, NLP, dashboards, and student-centered technical education.
            </motion.p>

            <motion.div className="hero-actions hero-actions-wide" variants={item}>
              {heroLinks.map((link) => (
                <HeroButton key={link.label} link={link} />
              ))}
            </motion.div>

            <motion.div className="hero-summary" variants={item}>
              <div className="hero-summary-line" />
              <p>
                The portfolio is built to show technical range without losing the
                through-line: practical modeling, interpretable analysis, and
                research-oriented problem solving.
              </p>
            </motion.div>
          </div>

          <motion.aside className="hero-lab-panel" variants={item}>
            <div className="hero-lab-header">
              <span className="hero-visual-label">Research identity</span>
              <strong>Applied ML with clear signals</strong>
            </div>

            <div className="hero-lab-grid">
              {heroStats.map((stat) => (
                <div className="hero-lab-card" key={stat.label}>
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                </div>
              ))}
            </div>

            <div className="hero-lab-surface" aria-hidden="true">
              <span className="lab-line lab-line-a" />
              <span className="lab-line lab-line-b" />
              <span className="lab-line lab-line-c" />
              <span className="lab-node lab-node-a" />
              <span className="lab-node lab-node-b" />
              <span className="lab-node lab-node-c" />
              <span className="lab-node lab-node-d" />
            </div>

            <div className="hero-lab-copy">
              <p>{pageContent.research.intro}</p>
            </div>
          </motion.aside>
        </div>
      </motion.section>

      <section className="section">
        <div className="section-heading">
          <p>Selected work</p>
          <h2>Featured Projects</h2>
        </div>
        <p className="page-intro">
          A front-door selection of projects that best represent the portfolio's
          mix of research, applied modeling, and technical communication.
        </p>

        <div className="featured-grid">
          {featuredProjects.map((card, index) => (
            <PortfolioCard card={card} featured index={index} key={card.title} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p>Research identity</p>
          <h2>What I Care About</h2>
        </div>
        <p className="page-intro">
          I am interested in machine learning systems that help people understand
          complex patterns, especially in areas like economic risk, misinformation,
          aviation systems, and education.
        </p>

        <div className="focus-grid">
          {focusAreas.map((card, index) => (
            <PortfolioCard card={card} index={index} key={card.title} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p>Beyond projects</p>
          <h2>Teaching, Writing, and Community</h2>
        </div>
        <div className="focus-grid">
          {homeHighlights.map((card, index) => (
            <PortfolioCard card={card} index={index} key={card.title} />
          ))}
        </div>
      </section>

      <section className="section">
        <motion.div
          className="closing-panel closing-panel-cta"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>Contact</p>
          <h2>
            Interested in research, data science, teaching, or collaboration?
            Let&apos;s connect.
          </h2>
          <span>
            The links below are the easiest way to start a conversation or review
            the portfolio from a professional angle.
          </span>
          <div className="contact-card-grid">
            {contactCards.map((card, index) => (
              <PortfolioCard card={card} index={index} key={card.title} />
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default HomePage;
