import axios from 'axios';

export const getLocationByZip = (zipcode) => {
    // const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=${GOOGLE_API_KEY}`;
    const url = `geocode/${zipcode}`;
    return axios.get(url)
        .then(response => {
            const lat = response.data.results[0].geometry.location.lat;
            const lng = response.data.results[0].geometry.location.lng;
            // return getLocation(lat, lon);
            return {
                lat, lng
            }
        })
}

// export const getLocation = (latitude, longitude) => {
//     const url = `/forecast/${latitude},${longitude}`;
//     return axios.get(url);
// }




