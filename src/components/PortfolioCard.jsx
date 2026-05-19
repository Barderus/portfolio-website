import { motion } from "framer-motion";
import ActionLink from "./ActionLink";
import VisualPreview from "./VisualPreview";

function PortfolioCard({ card, index = 0, featured = false }) {
  return (
    <motion.article
      className={`portfolio-card${featured ? " portfolio-card-featured" : ""}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
    >
      {card.showPreview !== false ? (
        <VisualPreview
          title={card.title}
          visualType={card.visualType}
          imageSrc={card.imageSrc}
          imageSources={card.imageSources}
        />
      ) : null}

      <div className="portfolio-card-body">
        {card.category || card.meta ? (
          <div className="portfolio-card-meta">
            {card.category ? <strong>{card.category}</strong> : null}
            {card.meta ? <span>{card.meta}</span> : null}
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
              <ActionLink
                item={item}
                className={item.variant === "secondary" ? "button button-secondary" : "button button-primary"}
                key={`${card.title}-${item.label}`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}

export default PortfolioCard;
