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

router.put('/markedbusiness', (req,res, next) => {
    // if(!req.body.name){
    //     next({msg: "bad request"})
    // }
    const marked = ({
        name: req.body.name,
        bid: req.body.bid,
        // isLiked: req.body.isLiked,
        lat: req.body.lat,
        lng: req.body.lng
    });
    MarkedBusiness.findOneAndUpdate(marked, 
        {...marked, isLiked: req.body.isLiked}, { upsert: true, runValidators: true }, function (err, markedBusiness) {
        if (err) return next(err);
        res.status(201).json({
            msg: 'Successfully created product'
        });
      });
});




module.exports = router;