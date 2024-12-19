const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/login', async(req, res) => {
    const { username, password } = req.body;

    // Replace this with your actual user authentication logic
    if (username === 'admin' && password === 'password') {
        const payload = { user: { id: 'adminId' } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.json({ token });
    }

    res.status(401).json({ msg: 'Invalid credentials' });
});

module.exports = router;