import axios from 'axios';

export const getLocationByZip = (zipcode) => {
    const url = `geocode/${zipcode}`;
    return axios.get(url)
        .then(response => {
            const lat = response.data.results[0].geometry.location.lat;
            const lng = response.data.results[0].geometry.location.lng;
            return {
                lat, lng
            }
        })
}

export const geoLocateMe = () => {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject('You turned me down :-(');
        }
        navigator.geolocation.getCurrentPosition(function success(pos){
            const {latitude, longitude } = pos.coords;
            resolve({
                lat: latitude,
                lng: longitude
            })
        }, function error(err){
            reject(err);
        })
    });
}





