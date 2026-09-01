import { useState, useEffect } from "react"

function ScrollProgress() {
  const [scrollPercent, setScrollPercent] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (scrollTop / docHeight) * 100
      setScrollPercent(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="scroll-progress">
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollPercent}%` }}
      />
    </div>
  )
}

export default ScrollProgress
