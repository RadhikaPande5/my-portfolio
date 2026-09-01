function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {currentYear} Radhika Pande 💚</p>
      </div>
    </footer>
  )
}

export default Footer
