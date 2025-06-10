const Artist = require('../models/Artist');

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
        const newArtist = new Artist({ name });
        await newArtist.save();
        res.json(newArtist);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
