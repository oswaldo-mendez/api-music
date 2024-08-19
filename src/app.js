const express = require('express');
const artistsRoutes = require('./routes/artistsRoutes');
const songsRoutes = require('./routes/songsRoutes');
const songsArtistRoutes = require('./routes/songsArtistRoutes');
const artistsSongDuration = require('./routes/artistsSongDuration')

const app = express();
app.use(express.json());

app.use('/artists', artistsRoutes);
app.use('/songs', songsRoutes);
app.use('/songs-with-artists',songsArtistRoutes);
app.use('/artists-by-song-duration',artistsSongDuration);

module.exports = app;