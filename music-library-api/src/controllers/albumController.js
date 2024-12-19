const Album = require('../models/Album');

exports.getAlbums = async(req, res) => {
    try {
        const albums = await Album.find().populate('artist', 'name');
        res.json(albums);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.createAlbum = async(req, res) => {
    try {
        const { title, artist } = req.body;
        const newAlbum = new Album({ title, artist });
        await newAlbum.save();
        res.json(newAlbum);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};