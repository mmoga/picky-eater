const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');

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

router.post('/markedbusiness', (req,res, next) => {
    // if(!req.body.name){
    //     next({msg: "bad request"})
    // }
    const marked = new MarkedBusiness({
        name: req.body.name,
        id: req.body.id,
        isLiked: req.body.isLiked,
        lat: req.body.lat,
        lng: req.body.lng
    });
    marked
        .save()
        .then(response => {
            res.status(201).json({
                msg: 'Successfully created product'
            });
        })
        .catch(next);
});



module.exports = router;