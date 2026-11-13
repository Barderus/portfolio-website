import { motion } from "framer-motion";
import ActionLink from "./ActionLink";

function ProjectCollection({ areas }) {
  return (
    <div className="project-areas">
      {areas.map((area, areaIndex) => (
        <section className="project-area" id={area.id} key={area.id}>
          <motion.header
            className="project-area-heading"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: areaIndex * 0.03 }}
          >
            <p>{String(areaIndex + 1).padStart(2, "0")}</p>
            <div>
              <h2>{area.title}</h2>
              <span>{area.description}</span>
            </div>
          </motion.header>

          <div className="project-entries">
            {area.projects.map((project, projectIndex) => (
              <motion.article
                className="project-entry"
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.42, delay: projectIndex * 0.04 }}
              >
                <div className="project-entry-header">
                  <h3>{project.title}</h3>
                  {project.links?.length ? (
                    <div className="project-entry-links">
                      {project.links.map((link) => (
                        <ActionLink item={link} className="text-link" key={`${project.title}-${link.label}`} />
                      ))}
                    </div>
                  ) : null}
                </div>

                <dl className="project-details">
                  <div>
                    <dt>Overview</dt>
                    <dd>{project.summary}</dd>
                  </div>
                  <div>
                    <dt>Project details</dt>
                    <dd>{project.context}</dd>
                  </div>
                  <div>
                    <dt>Outcome</dt>
                    <dd>{project.impact}</dd>
                  </div>
                </dl>

                {project.methods?.length ? (
                  <p className="project-technologies">
                    <strong>Technologies</strong>
                    <span>{project.methods.join(" · ")}</span>
                  </p>
                ) : null}
              </motion.article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProjectCollection;
