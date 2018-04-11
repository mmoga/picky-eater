const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const markedSchema = new Schema({
    name: {
        required: true,
        type: String,
    },
    lat: Number,
    lng: Number,
    id: String,
    isLiked: {
        required: true,
        type: Boolean
    }
});


const MarkedBusiness = mongoose.model('MarkedBusiness', markedSchema);
module.exports = MarkedBusiness;