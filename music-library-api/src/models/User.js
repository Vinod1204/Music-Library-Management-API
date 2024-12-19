const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_id: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['Admin', 'Editor', 'Viewer'], default: 'Viewer' },
});

module.exports = mongoose.model('User', userSchema);
