const mongoose = require('mongoose');

const TrackSchema = new mongoose.Schema({
    title: { type: String, required: true },
    album: { type: mongoose.Schema.Types.ObjectId, ref: 'Album', required: true },
    duration: { type: Number, required: true },
});

module.exports = mongoose.model('Track', TrackSchema);