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





