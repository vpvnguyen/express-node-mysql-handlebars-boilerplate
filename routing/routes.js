const express = require('express');
const router = express.Router();

// home
router.get('/', (req, res) => {
    res.render('index');
});

// export router to ../server.js
module.exports = router;