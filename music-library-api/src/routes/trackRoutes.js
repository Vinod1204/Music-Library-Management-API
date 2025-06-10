const express = require('express');
const router = express.Router();
const { getTracks, createTrack } = require('../controllers/trackController');

router.get('/', getTracks);
router.post('/', createTrack);

module.exports = router;
