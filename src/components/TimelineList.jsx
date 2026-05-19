import { motion } from "framer-motion";
import ActionLink from "./ActionLink";

function TimelineList({ items }) {
  return (
    <div className="timeline-list">
      {items.map((item, index) => (
        <motion.article
          className="timeline-item"
          key={`${item.title}-${index}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: index * 0.05 }}
        >
          <div className="timeline-marker" />
          <div className="timeline-period">{item.period}</div>
          <div className="timeline-content">
            <h3>{item.title}</h3>
            <strong>{item.role}</strong>
            <p>{item.description}</p>
            {item.methods?.length ? (
              <div className="tag-row">
                {item.methods.map((method) => (
                  <span className="tag-chip" key={`${item.title}-${method}`}>
                    {method}
                  </span>
                ))}
              </div>
            ) : null}
            {item.impact ? <p className="timeline-impact">{item.impact}</p> : null}
            {item.links?.length ? (
              <div className="button-row">
                {item.links.map((link) => (
                  <ActionLink
                    key={`${item.title}-${link.label}`}
                    item={link}
                    className={link.variant === "secondary" ? "button button-secondary" : "button button-primary"}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export default TimelineList;
