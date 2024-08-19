const express = require('express');
const router = express.Router();
const songsArtistController = require('../controllers/songsArtistController');

router.get('/', songsArtistController.getSongsWithArtists);

module.exports = router;