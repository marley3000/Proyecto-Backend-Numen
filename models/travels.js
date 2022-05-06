const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true
    },
    number_travelers: {
        type: Number,
        required: true
    },
    duration_days: {
        type: Number,
        required: true
    },
    valoration: {
        type: Number,
        required: true
    },
    opinion: {
        type: String,
        required: true
    },
    image_travel: {
        type: String,
    }
});
const Travel = mongoose.model('Travel', storeSchema);

module.exports = {Travel}