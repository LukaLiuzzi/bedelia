const { Router } = require("express")
const registroDB = require("../baseDatos/loginBD")
const jwt = require("jsonwebtoken")
const { TOKEN_SECRET } = require("../config/jwt")

const autenticar = (req, res, next) => {
  const token = req.cookies.token

  if (!token) {
    return res
      .status(401)
      .json({ estado: "FALLA", msj: "No estás autenticado" })
  }

  jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.error(err)
      return res
        .status(401)
        .json({ estado: "FALLA", msj: "No estás autenticado" })
    }
    req.user = decoded.correoElectronico
    next()
  })
}

module.exports = {
  autenticar,
}
