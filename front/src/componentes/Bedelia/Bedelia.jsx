import React, { useEffect, useState } from "react"
import HeaderBd from "../HeaderBd/HeaderBd"
import { Link } from "react-router-dom"
import estudiantes from "../../img/bedelia/alumnos.jpg"
import carreras from "../../img/bedelia/estudiante-libro.jpeg"
import inscripcion from "../../img/bedelia/inscripciones.jpeg"
import axios from "axios"
import { API_URL } from "../../constantes"
import { useNavigate } from "react-router-dom"

function Bedelia() {
  return (
    <div>
      <HeaderBd />
      <section className="alumnos_bedelia container" id="estudiantes">
        <div className="card-container">
          <div className="card">
            <img
              src={estudiantes}
              className="card-img-top"
              alt="Imagen de Alumnos"
            />
            <div className="card-body">
              <h5 className="card-title">Alumnos</h5>
              <p className="card-text">
                Aquí puedes encontrar información sobre los alumnos inscritos en
                el sistema.
              </p>
              <Link to="/estudiante" className="btn btn-primary">
                Ver Alumnos
              </Link>
            </div>
          </div>

          {/* Agrega otros bloques de contenido aquí */}
        </div>
      </section>
    </div>
  )
}

export default Bedelia
