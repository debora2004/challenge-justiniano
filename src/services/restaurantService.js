const Restaurant = require('../models/restaurant');

const registerRestaurant = async (name, address, operating_hours, photo) => {
    try {
        if (!name || !address || !operating_hours || !photo) 
            throw new Error('All fields are required');
        
        const registerRestaurant = new Restaurant({
            name,
            address,
            operating_hours,
            photo: photo.path
        });
        const savedRestaurant = await registerRestaurant.save();
        return savedRestaurant;
    } catch (err) {
        console.error("The server returned an error: " + err);
        throw err;
    }
}

const updateRestaurant = async (name, address, operating_hours, photo, id) => {
    try {
        
        if (!name || !address || !operating_hours || !photo) 
            throw new Error('All fields are required');

        const existingRestaurant = await Restaurant.findById(id);

        if (!existingRestaurant) 
            throw new Error('All fields are required');
        
        existingRestaurant.name = name;
        existingRestaurant.address = address;
        existingRestaurant.operating_hours = operating_hours;
        existingRestaurant.photo = photo.path;

        const updatedRestaurant = await existingRestaurant.save();
        return updatedRestaurant;
    } catch (err) {
        console.error("The server returned an error: " + err);
        throw err;
    }
};

const listAllRestaurants = async () => {
    try{
        const allRestaurants = await Restaurant.find();
        return allRestaurants;
    }catch(err){
        console.error("The server returned an error: "+ err);
        throw err;  
    }
}

const findByIdRestaurant = async (id) => {
    try{
        if(!id)
            throw new Error('Id is invalid');
        
        const restaurant = await Restaurant.findById(id);
        return restaurant;
    }catch(err){
        console.error("The server returned an error: "+ err);
        throw err;
    }
}

const deleteRestaurant = async (id) => {
    try{
        const restaurant = await Restaurant.findByIdAndDelete(id);
        return "The product was deleted successfully";
    }catch(err){
        console.error("The server returned an error: "+ err);
        throw err;
    }
}

module.exports = {
    registerRestaurant,
    updateRestaurant,
    listAllRestaurants,
    findByIdRestaurant,
    deleteRestaurant
};