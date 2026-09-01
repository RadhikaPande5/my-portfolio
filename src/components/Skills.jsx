import skills from "../data/skills"

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">My toolkit</p>
          <h2>Skills & technologies.</h2>
          <p>
            A growing toolkit built through coursework, projects, internships
            and consistent practice.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((category) => (
            <article key={category.category} className="skill-category">
              <h3>{category.category}</h3>
              <ul className="skill-list">
                {category.items.map((skill) => (
                  <li key={skill} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills