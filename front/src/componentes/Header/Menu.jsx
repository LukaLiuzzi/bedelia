import React, { useState } from "react"
import { Link } from "react-router-dom"

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    console.log("Toggle menu clicked")
    setMenuOpen(!menuOpen)
  }

  return (
    <nav>
      <button className="menuMobile" aria-label="Menú" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </button>
      <ul className={`menu ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/institucional" onClick={toggleMenu}>
            La Facultad
          </Link>
        </li>
        <li>
          <Link to="/carreras" onClick={toggleMenu}>
            Carreras
          </Link>
        </li>
        <li>
          <Link to="/contacto" onClick={toggleMenu}>
            Contacto
          </Link>
        </li>
        <li>
          <Link className="boton-inscripcion" to="/login" onClick={toggleMenu}>
            Acceso Bedelia
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
