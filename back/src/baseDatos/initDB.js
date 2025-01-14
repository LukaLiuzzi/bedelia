const mysql = require("mysql2/promise")
const seedDatabase = require("./seedDB")

const initializeDatabase = async () => {
  try {
    // Crear conexión inicial sin seleccionar base de datos
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    })

    // Crear base de datos si no existe
    await connection.query(
      `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`
    )
    await connection.query(`USE ${process.env.DB_NAME}`)

    // Crear tablas
    await connection.query(`
            CREATE TABLE IF NOT EXISTS usuario (
                idUsuario INT PRIMARY KEY AUTO_INCREMENT,
                correoElectronico VARCHAR(100) UNIQUE NOT NULL,
                clave VARCHAR(255) NOT NULL,
                nombre VARCHAR(100) NOT NULL,
                apellido VARCHAR(100) NOT NULL,
                rol ENUM('admin', 'estudiante', 'profesor') DEFAULT 'estudiante',
                activo BOOLEAN DEFAULT TRUE
            );
        `)

    await connection.query(`
            CREATE TABLE IF NOT EXISTS estudiante (
                idEstudiante INT PRIMARY KEY AUTO_INCREMENT,
                dni VARCHAR(20) UNIQUE NOT NULL,
                nombre VARCHAR(100) NOT NULL,
                apellido VARCHAR(100) NOT NULL,
                fechaNacimiento DATE,
                nacionalidad INT,
                correoElectronico VARCHAR(100) UNIQUE NOT NULL,
                celular VARCHAR(20),
                foto VARCHAR(255),
                activo BOOLEAN DEFAULT TRUE
            );
        `)

    await connection.query(`
            CREATE TABLE IF NOT EXISTS carrera (
                idCarrera INT PRIMARY KEY AUTO_INCREMENT,
                nombre VARCHAR(100) NOT NULL,
                modadlida INT,
                activo BOOLEAN DEFAULT TRUE
            );
        `)

    await connection.query(`
            CREATE TABLE IF NOT EXISTS materia (
                idMateria INT PRIMARY KEY AUTO_INCREMENT,
                nombre VARCHAR(100) NOT NULL,
                horasSemanales INT,
                tipoMateria VARCHAR(50),
                activo BOOLEAN DEFAULT TRUE
            );
        `)

    await connection.query(`
            CREATE TABLE IF NOT EXISTS estudiantecarrera (
                idEstudianteCarrera INT PRIMARY KEY AUTO_INCREMENT,
                idEstudiante INT,
                idCarrera INT,
                FOREIGN KEY (idEstudiante) REFERENCES estudiante(idEstudiante),
                FOREIGN KEY (idCarrera) REFERENCES carrera(idCarrera)
            );
        `)

    await connection.query(`
            CREATE TABLE IF NOT EXISTS estudiantemateria (
                idEstudianteMateria INT PRIMARY KEY AUTO_INCREMENT,
                idEstudiante INT,
                idMateria INT,
                FOREIGN KEY (idEstudiante) REFERENCES estudiante(idEstudiante),
                FOREIGN KEY (idMateria) REFERENCES materia(idMateria)
            );
        `)

    await connection.query(`
            CREATE TABLE IF NOT EXISTS carreramateria (
                idCarreraMateria INT PRIMARY KEY AUTO_INCREMENT,
                idCarrera INT,
                idMateria INT,
                FOREIGN KEY (idCarrera) REFERENCES carrera(idCarrera),
                FOREIGN KEY (idMateria) REFERENCES materia(idMateria)
            );
        `)

    console.log("Base de datos inicializada correctamente")
    if (process.env.INSERT_DB_DATA === "true") {
      await seedDatabase()
    }
    await connection.end()
  } catch (error) {
    console.error("Error al inicializar la base de datos:", error)
    throw error
  }
}

module.exports = initializeDatabase
