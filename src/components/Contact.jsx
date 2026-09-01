import { Link } from "react-router-dom"
import contactLinks from "../data/contactLinks"

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-card">
          <div className="contact-copy">
            <p className="eyebrow">Let's connect</p>
            <h2>Have an idea, opportunity or project?</h2>
            <p>
              I’m always open to learning, collaborating and connecting with
              people working on interesting problems.
            </p>
            <Link 
              to="/send-message"
              className="btn btn-primary"
            >
              Send me a message
            </Link>
          </div>

          <div className="contact-links">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span>{link.label}</span>
                <strong>{link.value} ↗</strong>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
