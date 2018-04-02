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

export const getPlaceCoords = (searchTerm, lat, lng) => {
    const url = `/term/${searchTerm}/${lat}/${lng}`;
    return axios.get(url)
        .then(resp => {
            // need to grab names and lat/lng of results to show on map.
            // would a for-in loop be necessary to grab all the lat/lng of 
            // the listed businesses? This would be required so I can have
            // markers show (like on typical Yelp searches) the locations
            // of restaurants that fit the search
            const placeLat = resp.businesses["0"].coordinates.latitude; // this doesn't work
            const placeLng = null;
            return {
                placeLat, placeLng
            }
        })
}




