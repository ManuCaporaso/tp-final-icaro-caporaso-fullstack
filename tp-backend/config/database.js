// Cargar las variables de entorno
require('dotenv').config();

const { Sequelize } = require('sequelize');

// Crear una instancia de Sequelize utilizando las variables de entorno
const sequelize = new Sequelize(
  process.env.DB_NAME,  // Nombre de la base de datos
  process.env.DB_USER,  // Usuario de la base de datos
  process.env.DB_PASSWORD,  // Contraseña del usuario
  {
    host: process.env.DB_HOST,  // Host de la base de datos
    dialect: process.env.DB_DIALECT,  // Dialecto de la base de datos (MySQL, PostgreSQL, etc.)
  }
);

module.exports = sequelize;
