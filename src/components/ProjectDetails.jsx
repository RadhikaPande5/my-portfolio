import { Link, useParams } from "react-router-dom"
import projects from "../data/projects"

function ProjectDetails() {
  const { id } = useParams()
  const project = projects.find((item) => item.id === Number(id))

  if (!project) {
    return (
      <main className="not-found">
        <div className="container">
          <p className="eyebrow">404</p>
          <h1>Project not found</h1>
          <Link to="/#projects" className="btn btn-primary">
            Back to Projects
          </Link>
          <Link to="/#home" className="btn btn-secondary">
            Back to Home
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="project-details">
      <div className="container project-details-inner">
        <Link to="/#projects" className="back-link">
          ← Back to Projects
        </Link>

        <div className="project-detail-header">
          <div>
            <p className="eyebrow">{project.subtitle}</p>
            <h1>{project.title}</h1>
          </div>
          {project.featured && <span className="badge">Featured</span>}
        </div>

        <div className="detail-visual">
          <span>{String(project.id).padStart(2, "0")}</span>
          <strong>{project.title}</strong>
        </div>

        <div className="detail-grid">
          <div>
            <h2>Overview</h2>
            <p className="long-description">{project.longDescription}</p>
          </div>

          <aside className="detail-tech">
            <h2>Technologies</h2>
            <div className="tech-list">
              {project.tech.map((item) => (
                <span key={item} className="tech-tag">
                  {item}
                </span>
              ))}
            </div>
          </aside>
        </div>

        {project.features?.length > 0 && (
          <div className="detail-section">
            <h2>Key features</h2>
            <ul className="features-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {project.links && (
          <div className="project-links">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            )}

            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>
            )}
          </div>
        )}
      </div>
    </main>
  )
}

export default ProjectDetails
