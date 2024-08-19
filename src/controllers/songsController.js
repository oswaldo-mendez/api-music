const Songs = require('../models/songs');
const Artists = require('../models/artists');

const getAllSongs = async (req, res) => {
    try {
      const songs = await Songs.findAll();
      res.json(songs);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener los songs.' });
    }
};

const getSong = async (req, res) => {
  try {
    const { id } = req.params;
    const song = await Songs.findOne({
      where: {id}
    });
    res.json(song);
  } catch (error) {
    res.status(500).json({error: 'Error al obtener la canción.', details: err.message});
  }
};

const createSongs = async (req, res) => {
    try {
      const { title, artist_id, release_year, duration, cover_url} = req.body;
      const songs = await Songs.create({ title, artist_id, release_year, duration, cover_url });
      console.log('Songs:', songs);
      res.status(201).json(songs);
    } catch (err) {
      res.status(500).json({ error: 'Error al crear el songs.', details: err.message });
    }
};

const updateSongs = async (req, res) => {
  try {
    const {id} = req.params;
  
    const { title, artist_id, release_year, duration, cover_url } = req.body;
    const songs = await Songs.findByPk(id);
    if (!songs) {
      return res.status(404).json({ error: 'Canción no encontrada.' });
    }
    songs.title = title;
    songs.artist_id = artist_id;
    songs.release_year = release_year;
    songs.duration = duration;
    songs.cover_url = cover_url;
    await songs.save();
    res.json(songs);

  }
  catch (err) {
    res.status(500).json({ error: 'Error al modificar la canción.', details: err.message });
  }
};
const deleteSongs = async (req, res) => {
  try {
    const { id } = req.params;
    const delete_song = await Songs.destroy({
        where: { id }
    });
    if (delete_song === 0) {
        return res.status(404).json({ error: 'Canción no encontrada.' });
    }

    // Responder con éxito
    res.status(200).json({ message: 'Canción eliminada con éxito.' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar Canción.', details: err.message });
  }
};

const getSongArtistId = async (req, res) => {
  
    try {
      const { artistId } = req.params;

      // Buscar todas las canciones del artista con el ID proporcionado
      const songs = await Songs.findAll({
          where: {
              artist_id: artistId, // Asegúrate de que coincide con el campo en tu modelo
          },
          include: {
              model: Artists,
              as: 'artist', // Alias usado en la definición de la relación
              attributes: ['id', 'name', 'bio', 'photo_url'] // Campos opcionales del artista que puedes incluir
          }
      });

      if (songs.length === 0) {
          return res.status(404).json({ error: 'No se encontraron canciones para este artista.' });
      }

      res.status(200).json(songs);
  } catch (err) {
    res.status(500).json({ error: 'Error al encontrar la cancion con id.', details: err.message });
  }
};

module.exports = {
    getAllSongs,
    createSongs,
    updateSongs,
    deleteSongs,
    getSong,
    getSongArtistId,
};