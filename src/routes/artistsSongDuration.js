const express = require('express');
const router = express.Router();
const songsDurationController = require('../controllers/songsDurtionController');

router.get('/:duration', songsDurationController.getSongDuration);

module.exports = router;