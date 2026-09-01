import { useEffect, useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark"
  })

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("portfolio-theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"))
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="/#home" className="logo" onClick={closeMenu}>
          RP<span>.</span>
        </a>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="/#home" onClick={closeMenu}>Home</a></li>
          <li><a href="/#about" onClick={closeMenu}>About</a></li>
          <li><a href="/#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="/#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="/#contact" onClick={closeMenu}>Contact</a></li>
        </ul>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? "☼" : "☾"}
          </button>

          <button
            className="hamburger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
