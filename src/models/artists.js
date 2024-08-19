const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');
const Songs = require('./songs.js');

const Artists = sequelize.define('Artists', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    photo_url: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    
  }, {
    timestamps: true, // Esto crea automáticamente las columnas createdAt y updatedAt
    tableName: 'artists', // Asegúrate de que el nombre de la tabla coincida con el de la BD
  }
);

 // Un artista puede tener muchas canciones
 Artists.hasMany(Songs, {
  foreignKey: 'artist_id',
  sourceKey: 'id',
  as: 'songs' // Alias para usar en consultas
});

// Cada canción pertenece a un único artista
Songs.belongsTo(Artists, {
  foreignKey: 'artist_id',
  targetId: 'id',
   as: 'artist'
});
  
  module.exports = Artists;