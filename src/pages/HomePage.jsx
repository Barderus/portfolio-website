import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { highlightStats } from "../content";

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

function HomePage() {
  return (
    <>
      <motion.section
        className="hero"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p className="hero-kicker" variants={item}>
          Computer Science graduate with minors in data science and mathematics
        </motion.p>
        <motion.h1 variants={item}>Data science, applied.</motion.h1>
        <motion.p className="hero-copy" variants={item}>
          Projects, research, teaching, and writing.
        </motion.p>

        <motion.div className="hero-actions" variants={item}>
          <Link className="button button-primary" to="/projects">
            Projects
          </Link>
          <Link className="button button-secondary" to="/research">
            Research
          </Link>
        </motion.div>

        <motion.div className="stats-grid" variants={container}>
          {highlightStats.map((stat) => (
            <motion.div className="stat-card" key={stat.label} variants={item}>
              <span>{stat.value}</span>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}

export default HomePage;
