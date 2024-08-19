const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Songs = sequelize.define('Songs', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Artists',
        key: 'id',
      }
    },
    release_year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    cover_url: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
  }, {
    timestamps: true, // Esto crea automáticamente las columnas createdAt y updatedAt
    tableName: 'songs', // Asegúrate de que el nombre de la tabla coincida con el de la BD
  });
  
  module.exports = Songs;