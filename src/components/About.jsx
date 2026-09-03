function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">A little about me</p>
          <h2>Learning by building.</h2>
          <p>
            I enjoy learning through hands-on projects, coding
            practice, hackathons and open-source work.
          </p>
        </div>

        <div className="about-grid">
          <article className="about-card">
            <span className="card-number">01</span>
            <h3>What I Build</h3>
            <p>
              From Python desktop applications and Flask websites to
              AI-powered applications, I like taking an idea from a concept
              to a usable implementation.
            </p>
          </article>

          <article className="about-card">
            <span className="card-number">02</span>
            <h3>What I'm Exploring</h3>
            <p>
              My current direction is Machine Learning, Generative AI and
              practical AI systems, while continuing to strengthen my
              software development fundamentals.
            </p>
          </article>

          <article className="about-card">
            <span className="card-number">03</span>
            <h3>How I Learn</h3>
            <p>
              I learn by building, debugging, solving problems and
              collaborating with others through projects, hackathons and
              open-source programs.
            </p>
          </article>

          <article className="about-card">
            <span className="card-number">04</span>
            <h3>Education</h3>
            <p>
              B.Tech in Information Technology at Institute of Engineering and
              Technology, Devi Ahilya Vishwavidyalaya, Indore.
            </p>
            <p className="muted">2024 – 2028 · CGPA 8.4</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About
