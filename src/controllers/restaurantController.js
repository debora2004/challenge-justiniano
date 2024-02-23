const restaurantService = require('../services/restaurantService');

const registerRestaurant = async (req, res) => {
    try {
        const { name, address, operating_hours } = req.body;
        const photo = req.file;
        const savedRestaurant = await restaurantService.registerRestaurant(name, address, operating_hours, photo);

        if (!req.file) 
          return res.status(400).json({ mensaje: 'Error: Falta la foto del restaurante' });
        
        res.status(201).json(savedRestaurant);
    } catch (err) {
        console.error("The server returned an error: " + err);
        
        if (!res) 
            console.error('Response object is undefined.');
            return;

        res.status(500).json({ mensaje: 'Error registering restaurant' });
    }
};

const deleteRestaurant = async (req, res) => {
    try {
      const { id } = req.params;
      console.log("ID!! "+ id)
      const deletedRestaurant = await restaurantService.deleteRestaurant(id);
      res.status(200).json(deletedRestaurant);
    } catch (error) {
      console.error('Driver error when deleting restaurant:', error);
      res.status(500).json({ mensaje: 'Driver error when deleting restaurant' });
    }
};

const updateRestaurant = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, address, operating_hours } = req.body;
        const photo = req.file;

        if (!photo) 
          return res.status(400).json({ mensaje: 'Error: Restaurant photo missing' });
        
        const restaurantUpdated = await restaurantService.updateRestaurant(name, address, operating_hours, photo, id);
        res.status(200).json(restaurantUpdated);
    } catch (error) {
        console.error('Driver error when updating restaurant:', error);
        res.status(500).json({ mensaje: 'Driver error when updating restaurant' });
    }
};

const listAllRestaurant = async (res) => {
    try {
      const allRestaurants = await restaurantService.listAllRestaurant();
      res.status(200).json(allRestaurants);
    } catch (error) {
      console.error('Controller error when listing all restaurants:', error);
      res.status(500).json({ mensaje: 'Controller error when listing all restaurants' });
    }
};

const findByIdRestaurant = async (req, res) => {
    try {
      const id  = req.params.id;
      console.log(id)
      const restaurant = await restaurantService.findByIdRestaurant(id);

      res.status(200).json(restaurant);
    } catch (error) {
      console.error('Controller error when searching by id:', error);
      res.status(500).json({ mensaje: 'Controller error when searching by id:' });
    }
};

module.exports = {
    registerRestaurant,
    updateRestaurant,
    findByIdRestaurant,
    listAllRestaurant,
    deleteRestaurant
};
