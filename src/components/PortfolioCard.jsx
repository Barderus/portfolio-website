import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import VisualPreview from "./VisualPreview";

function CardLink({ item }) {
  const variant = item.variant === "secondary" ? "button button-secondary" : "button button-primary";

  if (item.placeholder || !item.href && !item.to) {
    return (
      <span className={`${variant} button-disabled`} aria-disabled="true">
        {item.label}
      </span>
    );
  }

  if (item.to) {
    return (
      <Link className={variant} to={item.to}>
        {item.label}
      </Link>
    );
  }

  return (
    <a className={variant} href={item.href} target="_blank" rel="noreferrer">
      {item.label}
    </a>
  );
}

function PortfolioCard({ card, index = 0, featured = false }) {
  return (
    <motion.article
      className={`portfolio-card${featured ? " portfolio-card-featured" : ""}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
    >
      <VisualPreview
        title={card.title}
        visualType={card.visualType}
        imageSrc={card.imageSrc}
        imageSources={card.imageSources}
      />

      <div className="portfolio-card-body">
        {card.category || card.meta ? (
          <div className="portfolio-card-meta">
            <span>{card.category ?? card.meta}</span>
          </div>
        ) : null}

        <h3>{card.title}</h3>
        <p>{card.description}</p>

        {card.result ? <div className="portfolio-card-result">{card.result}</div> : null}

        {card.helper ? <div className="portfolio-card-helper">{card.helper}</div> : null}

        {card.tags?.length ? (
          <div className="tag-row">
            {card.tags.map((tag) => (
              <span className="tag-chip" key={`${card.title}-${tag}`}>
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        {card.links?.length ? (
          <div className="button-row">
            {card.links.map((item) => (
              <CardLink item={item} key={`${card.title}-${item.label}`} />
            ))}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}

export default PortfolioCard;
