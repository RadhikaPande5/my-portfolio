import { motion } from "motion/react"
import profileImg from "../assets/avatar.png"

import { useRef } from 'react';
import VariableProximity from './VariableProximity';

const socialLinks = [
  { name: "GitHub", url: "https://github.com/RadhikaPande5" },
  { name: "LinkedIn", url: "https://linkedin.com/in/radhika-pande-564a22319" },
  { name: "LeetCode", url: "https://leetcode.com/u/radhikapande" },
]

function Hero() {
  const containerRef = useRef(null);
  return (
    <section id="home" className="hero">
      <div className="container hero-container">

        <motion.div className="hero-visual"
          aria-label="Radhika Pande"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="profile-placeholder">
            <span>
              <img src={profileImg} alt={"Portrait"} />
            </span>
          </div>
          <p>Python Development · Full Stack Development · Problem Solving</p>
          <p>MERN · AI/ML · DSA</p>
        </motion.div>
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="eyebrow">B.Tech IT Student · IET DAVV</p>
          <h1>Hi, I'm</h1>
          <div className="hero-heading">
            <div
              ref={containerRef}
              style={{ position: 'relative' }}
            >
              <VariableProximity
                label={'Radhika Pande'}
                className={'variable-proximity-demo'}
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
              />
            </div>
          </div>


          <h2>Building practical software with a growing focus on AI/ML.</h2>

          <p className="hero-intro">
            I’m an Information Technology student who enjoys turning ideas into
            working applications. I work with Python, Java, JavaScript and
            modern web technologies, and I’m currently exploring Machine
            Learning, Generative AI and practical software development.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="/resume.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </div>

          <div className="social-links" aria-label="Social links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name} ↗
              </a>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  )
}

export default Hero
