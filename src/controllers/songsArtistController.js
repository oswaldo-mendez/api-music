const Songs = require('../models/songs');
const Artists = require('../models/artists');

const getSongsWithArtists = async (req, res) => {
    console.log('estoy aqui');
    try {
      // Obtener todas las canciones junto con la información del artista
      const songs = await Songs.findAll({
        include: {
            model: Artists,
            as: 'artist', // Alias usado en la definición de la relación
            attributes: ['id', 'name', 'bio', 'photo_url'] // Campos del artista que quieres incluir
        }
    });
  
    res.status(200).json(songs);
    } catch (err) {
      res.status(500).json({ details: err.message });
    }
  };

  module.exports = {
    getSongsWithArtists,
  };