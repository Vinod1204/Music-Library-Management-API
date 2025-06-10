const express = require('express');
const connectDB = require('./config/db');
const artistRoutes = require('./routes/artistRoutes');
const albumRoutes = require('./routes/albumRoutes');
const trackRoutes = require('./routes/trackRoutes');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.use('/api/artists', artistRoutes);
app.use('/api/albums', albumRoutes);
app.use('/api/tracks', trackRoutes);
app.use('/api/auth', authRoutes);


module.exports = app;
