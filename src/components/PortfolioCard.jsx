import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { openEmailDraft } from "../contact";
import VisualPreview from "./VisualPreview";

function CardLink({ item }) {
  const variant = item.variant === "secondary" ? "button button-secondary" : "button button-primary";

  if (item.to) {
    return (
      <Link className={variant} to={item.to}>
        {item.label}
      </Link>
    );
  }

  if (item.action === "email") {
    return (
      <button
        className={variant}
        type="button"
        onClick={() => openEmailDraft({ subject: "Portfolio inquiry" })}
      >
        {item.label}
      </button>
    );
  }

  if (!item.href) {
    return (
      <span className={`${variant} button-disabled`} aria-disabled="true">
        {item.label}
      </span>
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
              <CardLink item={item} key={`${card.title}-${item.label}`} />
            ))}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}

export default PortfolioCard;
