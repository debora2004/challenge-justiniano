const mongoose = require("mongoose");
const RestaurantSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
    },
    address: {
    type: String,
    required: true,
    },
    operating_hours: {
    type: String,
    required: true,
    },
    photo: {
    type: String,
    required: true,
    }
});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
module.exports = Restaurant;
