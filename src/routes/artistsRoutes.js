const express = require('express');
const router = express.Router();
const artistsController = require('../controllers/artistsController');

router.get('/', artistsController.getAllArtists);
router.post('/', artistsController.createArtists);
router.put('/:id', artistsController.updateArtists);
router.delete('/:id', artistsController.deleteArtists);
router.get('/:id', artistsController.getArtist);
router.get('/:id/songs', artistsController.getArtistSongs);

module.exports = router;