const Artists = require('../models/artists');
const Songs = require ('../models/songs');

const getAllArtists = async (req, res) => {
    try {
      const artists = await Artists.findAll();
      res.json(artists);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener los artistas.' });
    }
};

const getArtist = async (req, res) => {
    try {
      const { id } = req.params;
      const artist = await Artists.findOne({
        where: {id}
      });
      if (songs.length === 0) {
        return res.status(404).json({ error: 'No se encontraron canciones para este artista.' });
      }
      res.json(artist);
    } catch (error) {
      res.status(500).json({error: 'Error al obtener al artista.', details: err.message});
    }
};

const getArtistSongs = async (req, res) => {
  try {
    const {id} = req.params;
    const songs = await Songs.findAll({
      where: {artist_id: id},
    });
    res.json(songs)
  } catch (error) {
      res.status(500).json({ error: 'Error al obtener las canciones del artista.', details: error.message });
  }
};


const createArtists = async (req, res) => {
    try {
      const { name, bio, photo_url } = req.body;
      const artists = await Artists.create({ name, bio, photo_url });
      res.status(201).json(artists);
    } catch (err) {
      res.status(500).json({ error: 'Error al crear artista.', details: err.message });
    }
};

const updateArtists = async (req, res) => {
    try {
      const {id} = req.params;
      // console.log (id);
      const { name, bio, photo_url } = req.body;
      const artist = await Artists.findByPk(id);
      console.log(artist);
      if (!artist) {
        return res.status(404).json({ error: 'Artista no encontrado.' });
      }
      artist.name = name;
      artist.bio = bio;
      artist.photo_url = photo_url;
      await artist.save();
      res.json(artist);

    }
    catch (err) {
      res.status(500).json({ error: 'Error al modificar el artista.', details: err.message });
    }
};
const deleteArtists = async (req, res) => {
    try {
      const { id } = req.params;
      const delete_artist = await Artists.destroy({
          where: { id }
      });
      if (delete_artist === 0) {
          return res.status(404).json({ error: 'Artista no encontrado.' });
      }

      // Responder con éxito
      res.status(200).json({ message: 'Artista eliminado con éxito.' });
    } catch (err) {
      res.status(500).json({ error: 'Error al eliminar el artista.', details: err.message });
    }
};


module.exports = {
    getAllArtists,
    createArtists,
    deleteArtists,
    updateArtists,
    getArtist,
    getArtistSongs,
};