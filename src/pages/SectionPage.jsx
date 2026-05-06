import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { pageContent } from "../content";

function SectionPage() {
  const { slug } = useParams();
  const content = pageContent[slug];

  if (!content) {
    return (
      <section className="section">
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
      <div className="section-heading">
        <p>{content.eyebrow}</p>
        <h2>{content.title}</h2>
      </div>

      <p className="page-intro">{content.intro}</p>

      <div className="card-grid">
        {content.cards.map((card, index) => (
          <motion.article
            className="content-card"
            key={`${slug}-${card.title}-${index}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            {card.gallery ? (
              <div className="card-gallery" aria-label={`${card.title} preview gallery`}>
                <div className="card-gallery-track">
                  {[...card.gallery, ...card.gallery].map((label, galleryIndex) => (
                    <div className="card-gallery-frame" key={`${label}-${galleryIndex}`}>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : card.visualLabel ? (
              <div className="card-visual" aria-hidden="true">
                <span>{card.visualLabel}</span>
              </div>
            ) : null}
            <div className="card-meta">{card.meta}</div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            {card.linkUrl ? (
              <a
                className="text-link"
                href={card.linkUrl}
                target="_blank"
                rel="noreferrer"
              >
                {card.linkLabel ?? "View more"}
              </a>
            ) : null}
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default SectionPage;
