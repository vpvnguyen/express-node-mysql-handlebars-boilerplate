const express = require('express');
const router = express.Router();

// api model
const api = require('../models/api.model.js');

// display all friends list json
router.get('/api', (req, res) => {

    // log and send response to front as json
    console.log(`GET /api: ${req.body}`);
    res.json(api);
});

module.exports = router;