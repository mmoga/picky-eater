const express = require('express');
const router = express.Router()

const MarkedBusiness = require('../models/markedbusiness');

router.get('/markedbusiness', (req, res, next) => {
    MarkedBusiness.find()
    .exec()
    .then(allMarked => {
        res.status(200).json({
            markedBusiness : allMarked
        })
    })
    .catch(next)
});

router.post('/markedbusiness', (req, res, next) => {
    res.send('created a new business')
})

module.exports = router;