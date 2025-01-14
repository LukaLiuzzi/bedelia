const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const conexion = require("./baseDatos/conexionBD")

var morgan = require("morgan")
var fs = require("fs")
var path = require("path")

require("dotenv").config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
})
app.use(morgan("combined", { stream: accessLogStream }))

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
)
app.use(cookieParser())

app.get("/", (req, res) => {
  const saludo = { estado: true, mensaje: "bienvenido!" }
  res.status(200).json(saludo)
})

const v1Publico = require("./v1/rutas/publico")
const v1Estudiante = require("./v1/rutas/estudiante")
const v1Carreras = require("./v1/rutas/carreras")
const v1Materias = require("./v1/rutas/materias")
const v1Registro = require("./v1/rutas/registro")
const v1Login = require("./v1/rutas/login")
const v1Logout = require("./v1/rutas/logout")
const v1CarrerasMateria = require("./v1/rutas/carrerasMaterias")
const v1Matricular = require("./v1/rutas/matricular")

app.use("/api/v1/publico", v1Publico)
app.use("/api/v1/estudiante", v1Estudiante)
app.use("/api/v1/carreras", v1Carreras)
app.use("/api/v1/materias", v1Materias)
app.use("/api/v1/registro", v1Registro)
app.use("/api/v1/login", v1Login)
app.use("/api/v1/logout", v1Logout)
app.use("/api/v1/carrerasMaterias", v1CarrerasMateria)
app.use("/api/v1/matricular", v1Matricular)

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})
