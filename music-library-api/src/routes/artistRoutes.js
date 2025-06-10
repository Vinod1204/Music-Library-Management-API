const express = require('express');
const router = express.Router();
const { getArtists, createArtist } = require('../controllers/artistController');

router.get('/', getArtists);
router.post('/', createArtist);

module.exports = router;
