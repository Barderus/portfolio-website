import { motion } from "framer-motion";
import Breadcrumbs from "../components/Breadcrumbs";
import TimelineList from "../components/TimelineList";
import { researchAreas } from "../content";

function ResearchPage() {
  return (
    <motion.section
      className="section page-detail"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Research" }]} />

      <div className="section-heading section-heading-wide">
        <p>Research</p>
        <h2>Research interests</h2>
      </div>

      <TimelineList items={researchAreas} />
    </motion.section>
  );
}

export default ResearchPage;
