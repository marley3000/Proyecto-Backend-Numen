const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    img: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    duration_days: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price_ARS: {
        type: Number,
        required: true
    }
});
const Travel = mongoose.model('Travel', storeSchema);

module.exports = {Travel}