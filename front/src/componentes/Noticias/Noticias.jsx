import React, { useState, useEffect } from "react"
import "./Noticias.css"

// Imagen de respaldo cuando no hay imagen disponible
const fallbackImageURL = "https://placehold.co/600x400?text=No+Image"

function Noticias() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://newsapi.org/v2/everything?q=${"basket"}&sortBy=publishedAt&apiKey=3b286d5d11534b2b85a7a4906b4a5f6c&language=es`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        return response.json()
      })
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
        setError(error.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div className="loading">Cargando noticias...</div>
  }

  if (error) {
    return <div className="error">Error: {error}</div>
  }

  if (!data || !data.articles || data.articles.length === 0) {
    return <div className="no-news">No hay noticias disponibles</div>
  }

  const noticias = data.articles.slice(0, 6)

  return (
    <div className="container">
      <h1>Noticias sobre basket</h1>
      <div className="news-container">
        {noticias.map((article, index) => (
          <div className="news-item" key={index}>
            <div className="news-image">
              <img
                src={article.urlToImage || fallbackImageURL}
                alt={article.title}
                onError={(e) => {
                  e.target.src = fallbackImageURL
                }}
              />
            </div>
            <h2>{article.title}</h2>
            <p className="news-description">
              {article.description || "No hay descripción disponible"}
            </p>
            <div className="news-footer">
              <span className="news-source">{article.source.name}</span>
              <a
                className="blog__enlace-blog"
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Leer más
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Noticias
