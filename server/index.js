const express = require('express');
const axios = require('axios');

require('dotenv').config();
const { GOOGLE_API_KEY } = process.env;

const serverApp = express();
const port = process.env.PORT || 5000;

//middleware (powerups)
serverApp.use(express.static('client/build'));


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

//this serves the finished React app
serverApp.get('*', (request, response) => {
    response.sendFile('index.html', { root: path.resolve('client/build') });
});

serverApp.listen(port, () => {
    console.log(`Now listening on port ${port}`);
})