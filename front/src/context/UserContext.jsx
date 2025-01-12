import { createContext, useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { API_URL } from "../constantes"
import swal from "sweetalert"
import axios from "axios"

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const navegar = useNavigate()

  axios.defaults.withCredentials = true

  useEffect(() => {
    axios
      .get(API_URL + "/login/autenticar")
      .then((res) => {
        if (res.data.estado === "ok") {
          setUser(res.data.correoElectronico)
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  const login = (data) => {
    axios
      .post(API_URL + "/login/", data)
      .then((res) => {
        if (res.data.estado === "ok") {
          setUser(res.data.correoElectronico)
          navegar("/bedelia")
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const logout = (data) => {
    axios
      .get(API_URL + "/logout")
      .then((res) => {
        if (res.data.estado === "ok") {
          setUser(null)
          navegar("/")
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const registrar = (data) => {
    axios
      .post(API_URL + "/registro", data)
      .then((res) => {
        if (res.data.estado === "ok") {
          navegar("/login")
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <UserContext.Provider value={{ user, login, logout, registrar }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)

export default UserProvider
