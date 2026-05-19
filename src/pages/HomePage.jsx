import { motion } from "framer-motion";
import ActionLink from "../components/ActionLink";
import TimelineList from "../components/TimelineList";
import {
  homeHero,
  identitySections,
  projectTimeline,
  researchAreas,
  teachingTimeline,
} from "../content";

function HomePage() {
  return (
    <div className="home-page editorial-home">
      <motion.section
        className="editorial-hero"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="editorial-hero-copy editorial-hero-copy-wide">
          <p className="section-label">{homeHero.eyebrow}</p>
          <h1>{homeHero.title}</h1>

          <div className="hero-actions">
            {homeHero.links.map((link) => (
              <ActionLink
                key={link.label}
                item={link}
                className={link.variant === "secondary" ? "button button-secondary" : "button button-primary"}
              />
            ))}
          </div>
        </div>
      </motion.section>

      <section className="editorial-section">
        <div className="editorial-section-heading">
          <p className="section-label">About</p>
          <h2>About me</h2>
        </div>

        <div className="identity-list">
          {identitySections.map((section) => (
            <article className="identity-line" key={section.title}>
              <h3>{section.title}</h3>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-section">
        <div className="editorial-section-heading editorial-section-heading-split">
          <div>
            <p className="section-label">Selected work</p>
            <h2>Projects that best represent how I think and build.</h2>
          </div>
        </div>

        <TimelineList items={projectTimeline} />
      </section>

      <section className="editorial-section editorial-section-two-column">
        <div className="editorial-section-heading">
          <p className="section-label">Research</p>
          <h2>Research questions that I want to keep pursuing in graduate work.</h2>
        </div>

        <TimelineList items={researchAreas} />
      </section>

      <section className="editorial-section editorial-section-stack">
        <div className="editorial-section-heading editorial-section-heading-split">
          <div>
            <p className="section-label">Teaching and community</p>
            <h2>The other half of my work is helping people learn, participate, and grow.</h2>
          </div>
        </div>

        <TimelineList items={teachingTimeline} />
      </section>
    </div>
  );
}

export default HomePage;
