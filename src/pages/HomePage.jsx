import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { profileLinks } from "../content";

const workLinks = [
  { title: "Machine Learning & Predictive Analytics", description: "Predictive modeling, data analysis, and practical applications.", to: "/work#machine-learning" },
  { title: "Natural Language Processing & Explainable AI", description: "Misinformation detection and interpretable machine learning.", to: "/work#natural-language-processing" },
  { title: "Intelligent Systems & Optimization", description: "Reinforcement learning, routing, and decision-making.", to: "/work#intelligent-systems" },
  { title: "Software Development & Data Applications", description: "Applications, games, and data-driven tools.", to: "/work#software-development" },
];

const beyondLinks = [
  { title: "Teaching & Mentorship", description: "Course instruction, student support, and hands-on technical workshops.", to: "/teaching" },
  { title: "Research Interests", description: "Research questions and ongoing work in machine learning and intelligent systems.", to: "/research" },
  { title: "About Me", description: "Academic background, professional experience, and other activities.", to: "/about" },
];

function LinkList({ items }) {
  return (
    <div className="home-link-list">
      {items.map((item) => (
        <Link className="home-topic-link" to={item.to} key={item.title}>
          <span>
            <strong>{item.title}</strong>
            <small>{item.description}</small>
          </span>
          <span className="home-link-arrow" aria-hidden="true">→</span>
        </Link>
      ))}
    </div>
  );
}

function HomePage() {
  return (
    <motion.div
      className="home-page home-compact"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <section className="home-introduction" aria-labelledby="home-title">
        <h1 id="home-title">Gabriel dos Reis</h1>
        <p className="home-subtitle">Computer Science · Data Science · Applied AI</p>
        <div className="home-intro-copy">
          <p>I&apos;m a Computer Science graduate from Lewis University and currently work as an Adjunct Faculty / Teaching Assistant at College of DuPage.</p>
          <p>My interests span machine learning, reinforcement learning, software development, and applied research. I enjoy working on problems that combine technical challenges with practical applications.</p>
        </div>
      </section>

      <section className="home-directory" aria-labelledby="explore-work">
        <div className="home-section-heading">
          <p>Selected areas</p>
          <h2 id="explore-work">Explore My Work</h2>
        </div>
        <LinkList items={workLinks} />
      </section>

      <section className="home-directory" aria-labelledby="beyond-projects">
        <div className="home-section-heading">
          <p>More</p>
          <h2 id="beyond-projects">Beyond Projects</h2>
        </div>
        <LinkList items={beyondLinks} />
      </section>

      <nav className="home-external-links" aria-label="External and contact links">
        <a href={profileLinks.github.href} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profileLinks.linkedin.href} target="_blank" rel="noreferrer">LinkedIn</a>
        <Link to="/contact">Contact</Link>
      </nav>
    </motion.div>
  );
}

export default HomePage;
