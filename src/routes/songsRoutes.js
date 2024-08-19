const express = require('express');
const router = express.Router();
const songsController = require('../controllers/songsController');

router.get('/', songsController.getAllSongs);
router.post('/', songsController.createSongs);
router.put('/:id', songsController.updateSongs);
router.delete('/:id', songsController.deleteSongs);
router.get('/:id', songsController.getSong);
router.get('/artists/:artistId', songsController.getSongArtistId);



module.exports = router;