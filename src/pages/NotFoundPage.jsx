function NotFoundPage() {
  return (
    <main className="not-found">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <a href="/" className="btn btn-primary">Back Home</a>
      </div>
    </main>
  )
}

export default NotFoundPage