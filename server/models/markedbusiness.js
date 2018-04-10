const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const markedSchema = new Schema({
 // name: String, // I would add more info about this property
    name: {
        required: true,
        type: String,
    },
    lat: Number,
    lng: Number,
    id: Number,
    isLiked: {
        required: true,
        type: Boolean
    }
});


const MarkedBusiness = mongoose.model('MarkedBusiness', markedSchema);
module.exports = MarkedBusiness;