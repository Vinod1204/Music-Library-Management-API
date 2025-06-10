const Track = require('../models/Track');

exports.getTracks = async(req, res) => {
    try {
        const tracks = await Track.find().populate('album', 'title');
        res.json(tracks);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.createTrack = async(req, res) => {
    try {
        const { title, album, duration } = req.body;
        const newTrack = new Track({ title, album, duration });
        await newTrack.save();
        res.json(newTrack);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
