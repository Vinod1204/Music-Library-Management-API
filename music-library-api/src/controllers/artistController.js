const Artist = require('../models/Artist');
const { v4: uuidv4 } = require('uuid');

exports.getArtists = async(req, res) => {
    try {
        const artists = await Artist.find();
        res.json(artists);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.createArtist = async(req, res) => {
    try {
        const { name } = req.body;
        const newArtist = new Artist({ artist_id: uuidv4(), name });
        await newArtist.save();
        res.json(newArtist);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
