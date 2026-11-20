import { motion } from "framer-motion";
import Breadcrumbs from "../components/Breadcrumbs";

const cvUrl = `${import.meta.env.BASE_URL}Gabriel_dos_Reis_CV.pdf`;

function ResumePage() {
  return (
    <motion.section
      className="section page-detail"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Resume" }]} />

      <div className="section-heading section-heading-wide">
        <p>Curriculum vitae</p>
        <h2>Gabriel dos Reis</h2>
      </div>

      <p className="page-intro">View my CV below or open the PDF in a new tab.</p>

      <div className="button-row resume-actions">
        <a className="button button-primary" href={cvUrl} target="_blank" rel="noopener noreferrer">
          Open CV as PDF
        </a>
        <a className="button button-secondary" href={cvUrl} download="Gabriel_dos_Reis_CV.pdf">
          Download CV
        </a>
      </div>

      <object className="resume-document" data={cvUrl} type="application/pdf" aria-label="Gabriel dos Reis CV">
        <p>
          Your browser cannot display the PDF here. <a href={cvUrl}>Open the CV</a> instead.
        </p>
      </object>
    </motion.section>
  );
}

export default ResumePage;
