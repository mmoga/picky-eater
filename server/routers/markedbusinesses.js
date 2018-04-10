const express = require('express');
const router = express.Router()

// const MarkedBusiness = require('../models/markedbusiness');

router.get('/markedbusinesses', (res, req) => {
    res.send('stuff here');
});

module.exports = router;