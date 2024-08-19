const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: 5432,
});

sequelize.authenticate()
  .then(() => console.log('Conexión exitosa a la base de datos.'))
  .catch(err => console.error('No se pudo conectar a la base de datos:', err));

module.exports = sequelize;