const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
    },
    price: {
    type: String,
    required: true,
    },
    category: {
    type: String,
    required: true,
    },
    special_offer: {
    type: String,
    required: true,
    },
    price_offer: {
    type: String,
    required: true,
    },
    day_offer: {
    type: String,
    required: true,
    },
    offer_schedule: {
    type: String,
    required: true,
    },
    photo: {
    type: String,
    required: true,
    },
    restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurante',
    required: true,
    },
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
