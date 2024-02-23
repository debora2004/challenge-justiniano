const mongoose = require("mongoose");
const RestaurantSchema = new mongoose.Schema({
    id: {
    type: Number,
    autoincrement: true,
    },
    name: {
    type: String,
    required: true,
    },
    address: {
    type: String,
    required: true,
    },
    operating_hours: {
    type: Date,
    required: true,
    },
    photo: {
    type: String,
    required: true,
    }
});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
module.exports = Restaurant;
