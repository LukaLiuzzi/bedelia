const mysql = require("mysql2/promise")
const initializeDatabase = require("./initDB")

// Creamos y exportamos la conexión de manera sincrónica
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
})

// Inicializamos la base de datos en segundo plano
initializeDatabase().catch((error) => {
  console.error("Error al inicializar la base de datos:", error)
  process.exit(1)
})

module.exports = pool
