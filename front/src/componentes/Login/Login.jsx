import React, { useEffect, useState } from "react"
import logo from "../../img/logo-uner.png"
import axios from "axios"
import { API_URL } from "../../constantes"
import { useNavigate } from "react-router-dom"
import swal from "sweetalert"
import { useUser } from "../../context/UserContext"

function Login() {
  const [values, setValues] = useState({
    correoElectronico: "admin@test.com",
    clave: "password123",
  })
  const navegar = useNavigate()
  const { user, login } = useUser()

  useEffect(() => {
    if (user) {
      navegar("/bedelia")
    }
  }, [user])

  const manejarLogin = (e) => {
    e.preventDefault()
    login(values)
  }

  return (
    <div className="login-container">
      <div className="logo-login">
        <img src={logo} alt="Logo Uner" />
      </div>
      <div className="login-box">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={manejarLogin}>
          <div className="input-container">
            <label htmlFor="usuario">Usuario:</label>
            <input
              defaultValue="admin@test.com"
              onChange={(e) =>
                setValues({ ...values, correoElectronico: e.target.value })
              }
              type="email"
              name="correoElectronico"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="contrasena">Contraseña:</label>
            <input
              defaultValue="password123"
              onChange={(e) => setValues({ ...values, clave: e.target.value })}
              type="password"
              name="clave"
              required
            />
          </div>
          <div className="input-container">
            <a href="/registro">Crear cuenta</a> |{" "}
            <a href="#">Olvidé mi contraseña</a>
          </div>
          <button type="submit" name="iniciar-sesion">
            Acceder
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
