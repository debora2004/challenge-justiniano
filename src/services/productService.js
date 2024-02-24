const Product = require('../models/product');

const registerProduct = async (name, price, category, special_offer, price_offer, day_offer,  offer_schedule, restauranteId, photo) => {
    try {

        if(!name || !price || !category || !special_offer || !price_offer || !day_offer || !offer_schedule || !restauranteId || !photo) 
            throw new Error('All fields are required');

        const registerProduct = new Product({
            name,
            price,
            category,
            special_offer,
            price_offer,
            day_offer,
            offer_schedule,
            photo: photo.path,
            restaurant: restauranteId
        })
        const registeredProduct = await registerProduct.save();

        return registeredProduct;
    }
    catch (err) {
        console.error("The server returned an error: " + err);
        throw err;
    }
}

const updateProduct = async (name, price, category, special_offer, price_offer, day_offer,  offer_schedule, restaurantId, photo, id) => {
    try {
        if (!name || !price || !category || !special_offer || !price_offer || !day_offer || !offer_schedule || !restaurantId || !photo) 
            throw new Error('All fields are required');

        const existingProduct = await Product.findById(id);

        if (!existingProduct) 
            throw new Error('All fields are required');
        
        existingProduct.name = name;
        existingProduct.price = price;
        existingProduct.category = category;
        existingProduct.special_offer = special_offer;
        existingProduct.price_offer = price_offer;
        existingProduct.day_offer = day_offer;
        existingProduct.offer_schedule = offer_schedule;
        existingProduct.photo = photo;
        existingProduct.restaurant = restaurantId;

        const updatedProduct = await existingProduct.save();
        return updatedProduct;
    }
    catch (err) {
        console.error("The server returned an error: " + err);
        throw err;
    }
};

const listAllProducts = async () => {
    try{
        const allProducts = await Product.find();
        return allProducts;
    }
    catch(err){
        console.error("The server returned an error: "+ err);
        throw err;  
    }
}

const findByIdProduct = async (id) => {
    try{
        if(!id)
            throw new Error('Id is invalid');
        
        const product = await Product.findById(id);
        return product;
    }
    catch(err){
        console.error("The server returned an error: "+ err);
        throw err;
    }
}

const deleteProduct = async (id) => {
    try{
        const product = await Product.findByIdAndDelete(id);
        return "The product was deleted successfully";
    }
    catch(err){
        console.error("The server returned an error: "+ err);
        throw err;
    }
}

module.exports = {
    registerProduct,
    updateProduct,
    listAllProducts,
    findByIdProduct,
    deleteProduct
}