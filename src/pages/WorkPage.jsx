import { motion } from "framer-motion";
import Breadcrumbs from "../components/Breadcrumbs";
import TimelineList from "../components/TimelineList";
import { projectTimeline } from "../content";

function WorkPage() {
  return (
    <motion.section
      className="section page-detail"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Work" }]} />

      <div className="section-heading section-heading-wide">
        <p>Selected work</p>
        <h2>Projects</h2>
      </div>

      <p className="page-intro">
        A focused set of projects across prediction, NLP, dashboards, and applied research.
      </p>

      <TimelineList items={projectTimeline} />
    </motion.section>
  );
}

export default WorkPage;
