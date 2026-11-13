import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import ProjectCollection from "../components/ProjectCollection";
import { workAreas } from "../content";

function WorkPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const target = document.getElementById(hash.slice(1));
    if (target) {
      window.requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
    }
  }, [hash]);

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
        <h2>Research &amp; Projects</h2>
      </div>

      <p className="page-intro">
        A collection of my work in machine learning, data science, software development, and
        applied research.
      </p>

      <ProjectCollection areas={workAreas} />
    </motion.section>
  );
}

export default WorkPage;
