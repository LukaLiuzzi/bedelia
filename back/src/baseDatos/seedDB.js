const mysql = require("mysql2/promise")
const bcrypt = require("bcryptjs")

const seedDatabase = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
    })

    // Insertar usuarios
    const hashedPassword = await bcrypt.hash("password123", 10)
    await connection.query(`
      INSERT INTO usuario (correoElectronico, clave, nombre, apellido, rol) VALUES 
      ('admin@test.com', '${hashedPassword}', 'Admin', 'Principal', 'admin'),
      ('profesor@test.com', '${hashedPassword}', 'Juan', 'Pérez', 'profesor'),
      ('estudiante@test.com', '${hashedPassword}', 'María', 'González', 'estudiante')
    `)

    // Insertar estudiantes
    await connection.query(`
      INSERT INTO estudiante (dni, nombre, apellido, fechaNacimiento, nacionalidad, correoElectronico, celular) VALUES 
      ('12345678', 'María', 'González', '2000-05-15', 1, 'estudiante@test.com', '098123456'),
      ('23456789', 'Pedro', 'Rodríguez', '1999-08-22', 1, 'pedro@test.com', '098234567'),
      ('34567890', 'Ana', 'Martínez', '2001-03-10', 1, 'ana@test.com', '098345678')
    `)

    // Insertar carreras
    await connection.query(`
      INSERT INTO carrera (nombre, modadlida) VALUES 
      ('Ingeniería en Sistemas', 1),
      ('Licenciatura en Administración', 1),
      ('Tecnicatura en Desarrollo', 2)
    `)

    // Insertar materias
    await connection.query(`
      INSERT INTO materia (nombre, horasSemanales, tipoMateria) VALUES 
      ('Programación I', 6, 'Obligatoria'),
      ('Base de Datos', 4, 'Obligatoria'),
      ('Matemática', 6, 'Obligatoria'),
      ('Inglés Técnico', 4, 'Opcional')
    `)

    // Relacionar estudiantes con carreras
    await connection.query(`
      INSERT INTO estudiantecarrera (idEstudiante, idCarrera) VALUES 
      (1, 1),
      (2, 1),
      (3, 2)
    `)

    // Relacionar estudiantes con materias
    await connection.query(`
      INSERT INTO estudiantemateria (idEstudiante, idMateria) VALUES 
      (1, 1),
      (1, 2),
      (2, 1),
      (3, 3)
    `)

    // Relacionar carreras con materias
    await connection.query(`
      INSERT INTO carreramateria (idCarrera, idMateria) VALUES 
      (1, 1),
      (1, 2),
      (1, 3),
      (2, 3),
      (2, 4)
    `)

    console.log("Datos de prueba insertados correctamente")
    await connection.end()
  } catch (error) {
    console.error("Error al insertar datos de prueba:", error)
    throw error
  }
}

module.exports = seedDatabase
