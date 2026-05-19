import { motion } from "framer-motion";
import Breadcrumbs from "../components/Breadcrumbs";
import TimelineList from "../components/TimelineList";
import { teachingTimeline } from "../content";

function TeachingPage() {
  return (
    <motion.section
      className="section page-detail"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Teaching" }]} />

      <div className="section-heading section-heading-wide">
        <p>Teaching and community</p>
        <h2>Teaching, mentoring, and community work</h2>
      </div>

      <TimelineList items={teachingTimeline} />
    </motion.section>
  );
}

export default TeachingPage;
