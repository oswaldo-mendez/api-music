const { Op } = require('sequelize'); // Importa Op para usar operadores
const Songs = require('../models/songs');
const Artists = require('../models/artists');

const getSongDuration = async (req, res) => {
  console.log('estoy aqui');
      try {
        const { duration } = req.params;
        console.log (duration)

        // Buscar todos los artistas que tienen canciones con una duración específica o mayor
        const artists = await Artists.findAll({
            include: {
                model: Songs,
                as: 'songs', // Alias usado en la definición de la relación
                where: {
                    duration: {
                        [Op.gte]: duration // Utiliza Op.gte para comparar la duración
                    }
                },
                attributes: ['id', 'title', 'duration'] // Campos de la canción que quieres incluir
            },
            attributes: ['id', 'name', 'bio', 'photo_url'], // Campos del artista que quieres incluir
            distinct: true // Asegúrate de que los resultados no se dupliquen
        });

        if (artists.length === 0) {
            return res.status(404).json({ error: 'No se encontraron artistas con canciones de esa duración o mayor.' });
        }

        res.status(200).json(artists);
      
    } catch (err) {
      res.status(500).json({ details: err.message });
    }
  };

  module.exports = {
    getSongDuration,
  };