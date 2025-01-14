import React from "react"
import logo from "../../img/logo-uner.png"

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer__columna">
          <img src={logo} alt="Uner logo" />
          <p className="footer__direccion">
            Monseñor Tavella 1424,
            <br />
            Concordia CP(3200) Entre Ríos
            <br />
            Teléfono: (+54) (345) 4231400
            <br />
            Fax: (+54) (345) 4231410
            <br />
            E-mail: informes.fcad@uner.edu.ar
          </p>
        </div>
        <div className="footer__columna">
          <h2 className="footer__titulo">Enlaces útiles</h2>
          <ul className="footer__lista">
            <li>
              <a href="https://www.uner.edu.ar/">
                Universidad Nacional de Entre Ríos
              </a>
            </li>
            <li>
              <a href="https://uner.edu.ar/transparencia/">Transparencia</a>
            </li>
            <li>
              <a href="http://argentinainvestiga.edu.ar/">
                Argentina Investiga
              </a>
            </li>
            <li>
              <a href="https://eduner.uner.edu.ar/">EDUNER</a>
            </li>
            <li>
              <a href="https://g3autogestion.uner.edu.ar/g3w3/">SIRUNER</a>
            </li>
            <li>
              <a href="http://sedici.unlp.edu.ar/">SeDiCI</a>
            </li>
          </ul>
        </div>
        <div className="footer__columna">
          <h2 className="footer__titulo">Somos parte de</h2>
          <ul className="footer__lista">
            <li>
              <a href="https://aapp.webnode.page/">AAPP</a>
            </li>
            <li>
              <a href="https://bfa.ar/">BFA-Blockchain Federal Argentina</a>
            </li>
            <li>
              <a href="http://www.adenag.org.ar/">ADENAG</a>
            </li>
            <li>
              <a href="http://grupomontevideo.org/sitio/">AUGM</a>
            </li>
            <li>
              <a href="https://www.codece.com.ar/">CODECE</a>
            </li>
            <li>
              <a href="https://redunci.info.unlp.edu.ar/">Red UNCI</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
