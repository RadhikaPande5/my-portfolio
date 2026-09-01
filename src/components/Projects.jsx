import { motion } from "motion/react"
import projects from "../data/projects"
import ProjectCard from "./ProjectCard"

function Projects() {

    const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Things I've built.</h2>
          <p>
            A mix of software projects, AI experimentation and collaborative
            problem-solving.
          </p>
        </div>

        <motion.div 
          className="project-list"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <ProjectCard key={project.id} {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects