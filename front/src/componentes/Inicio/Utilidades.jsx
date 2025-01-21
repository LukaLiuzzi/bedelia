import React from "react"

function Utilidades() {
  return (
    <section className="information container">
      <div className="bloques">
        <div className="bloques_container">
          <i className="fas fa-arrow-circle-right"></i>
          <div className="bloques_informacion">
            <h2>TOUR VIRTUAL 360</h2>
          </div>
        </div>
        <div className="bloque_img_uno"></div>
      </div>
      <div className="bloques">
        <div className="bloques_container">
          <i className="fas fa-arrow-circle-right"></i>
          <div className="bloques_informacion">
            <h2>CONVOCATORIA A BECAS</h2>
          </div>
        </div>
        <div className="bloque_img_dos"></div>
      </div>
      <div className="bloques">
        <div className="bloques_container">
          <i className="fas fa-arrow-circle-right"></i>
          <div className="bloques_informacion">
            <h2>CAMPUS VIRTUAL</h2>
            <a
              href="https://campus.uner.edu.ar/fcad/login/index.php"
              target="_blank"
            >
              Ir al campus
            </a>
          </div>
        </div>
        <div className="bloque_img_tres"></div>
      </div>
    </section>
  )
}

export default Utilidades
