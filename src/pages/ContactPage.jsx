import { motion } from "framer-motion";
import Breadcrumbs from "../components/Breadcrumbs";
import ActionLink from "../components/ActionLink";
import { contactEntries } from "../content";

function ContactPage() {
  return (
    <motion.section
      className="section page-detail contact-page"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />

      <div className="section-heading section-heading-wide">
        <p>Contact</p>
        <h2>Let's connect</h2>
      </div>

      <div className="contact-intro">
        <p className="contact-kicker">
          I&apos;m always happy to hear from people interested in data science, research,
          teaching, or thoughtful collaboration.
        </p>
      </div>

        <div className="contact-panel">
          <div className="contact-panel-copy">
            <span className="contact-panel-label">Best ways to reach me</span>
            <h3>Open to conversations that lead somewhere meaningful.</h3>
          </div>

          <div className="contact-list">
            {contactEntries.map((entry) => (
              <div className="contact-line" key={entry.title}>
                <span>{entry.title}</span>
                <strong>{entry.value}</strong>
                <ActionLink item={entry} className="button button-secondary contact-action-button" />
              </div>
            ))}
          </div>
      </div>
    </motion.section>
  );
}

export default ContactPage;
