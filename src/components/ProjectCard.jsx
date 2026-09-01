import { motion } from "motion/react"
import { Link } from "react-router-dom"

function ProjectCard({
  id,
  title,
  subtitle,
  description,
  tech,
  featured,
}) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <article className={`project-card ${featured ? "project-card-featured" : ""}`}>
        <Link to={`/projects/${id}`} className="project-card-link">
          <div className="project-visual">
            <span className="project-index">
              {String(id).padStart(2, "0")}
            </span>
            {featured && <span className="badge">Featured</span>}
          </div>
    
          <div className="project-content">
            <p className="project-kicker">{subtitle}</p>
            <h3>{title}</h3>
            <p className="project-description">{description}</p>
    
            <div className="tech-list">
              {tech.map((item) => (
                <span key={item} className="tech-tag">
                  {item}
                </span>
              ))}
            </div>
            
            <span className="project-more">View project details →</span>
          </div>
        </Link>
      </article>
    </motion.div>
  )
}

export default ProjectCard
