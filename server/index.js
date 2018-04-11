const express = require('express');
const axios = require('axios');
const path = require('path');
const mongoose = require('mongoose');


require('dotenv').config();
const { GOOGLE_API_KEY, YELP_API_KEY, MONGO_URI } = process.env;

mongoose.connect(process.env.MONGO_URI);

const serverApp = express();
const port = process.env.PORT || 5000;

const markedRouter = require('./routers/markedbusinesses');
//middleware (powerups)
serverApp.use(express.static('client/build'));
serverApp.use(markedRouter);


serverApp.get('/geocode/:zipcode', function(request, response) {
    const { zipcode } = request.params;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=${GOOGLE_API_KEY}`;
    axios.get(url)
        .then(res => {
            response.status(200).json(res.data);
        })
        .catch(err => {
            response.status(500).json({
                msg: 'No zipcode functionality. Sorry'
            })
        });
});

serverApp.get('/term/:searchTerm/:lat/:lng', function(request, response) {
    const { searchTerm } = request.params;
    // these need to come from whatever the state is in App.js 
    const { lat } = request.params;
    const { lng } = request.params;
    const url = `https://api.yelp.com/v3/businesses/search?term=${searchTerm}&latitude=${lat}&longitude=${lng}`;
    const config = {
        headers: {'Authorization':`Bearer ${YELP_API_KEY}`}
    };
    axios.get(url, config)
        .then(res => {
            response.status(200).json(res.data);
        })
        .catch(err => {
            response.status(500).json({
                msg: 'No term search ability. Sorry'
            })
        })
})

//this serves the finished React app
serverApp.get('*', (request, response) => {
    response.sendFile('index.html', { root: path.resolve('client/build') });
});

serverApp.listen(port, () => {
    console.log(`Now listening on port ${port}`);
})

