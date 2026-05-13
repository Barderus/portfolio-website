import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "../components/Breadcrumbs";
import PortfolioCard from "../components/PortfolioCard";
import { pageContent } from "../content";

const routeAliases = {
  projects: "work",
  research: "work",
};

function SectionPage() {
  const { slug } = useParams();
  const resolvedSlug = routeAliases[slug] ?? slug;
  const content = pageContent[resolvedSlug];

  if (slug !== resolvedSlug) {
    return <Navigate replace to={`/${resolvedSlug}`} />;
  }

  if (!content) {
    return (
      <section className="section page-detail">
        <div className="section-heading">
          <p>Missing page</p>
          <h2>That section does not exist.</h2>
        </div>
        <Link className="button button-secondary" to="/">
          Back home
        </Link>
      </section>
    );
  }

  return (
    <motion.section
      key={slug}
      className="section page-detail"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: content.title }]} />

      <div className="section-heading section-heading-wide">
        <p>{content.eyebrow}</p>
        <h2>{content.title}</h2>
      </div>

      <p className="page-intro">{content.intro}</p>

      <div className="card-grid">
        {content.cards.map((card, index) => (
          <PortfolioCard card={card} index={index} key={`${slug}-${card.title}-${index}`} />
        ))}
      </div>
    </motion.section>
  );
}

export default SectionPage;
