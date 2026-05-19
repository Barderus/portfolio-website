import { motion } from "framer-motion";
import Breadcrumbs from "../components/Breadcrumbs";
import { identitySections } from "../content";

function AboutPage() {
  return (
    <motion.section
      className="section page-detail"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About" }]} />

      <div className="section-heading section-heading-wide">
        <p>About</p>
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
    </motion.section>
  );
}

export default AboutPage;
