const productService = require('../services/productService');

const registerProduct = async (req, res) => {
    try {
        const { name, price, category, special_offer, price_offer, day_offer,  offer_schedule } = req.body;
        const photo = req.file;
        const restaurantId = req.params.id;
        if (!req.file) 
            return res.status(400).json({ mensaje: 'Error: Falta la foto del producto' });

        const savedProduct = await productService.registerProduct(name, price, category, special_offer, price_offer, day_offer,  offer_schedule, restaurantId, photo);
        res.status(201).json(savedProduct);
    } catch (err) {
        console.error("The server returned an error: " + err);
        res.status(500).json({ mensaje: 'Error registering product' });
    }
};

const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, price, category, special_offer, price_offer, day_offer,  offer_schedule, restaurantId } = req.body;
        const photo = req.file.path;

        if (!photo) 
          return res.status(400).json({ mensaje: 'Error: Producto photo missing' });
        console.log("Desde controller: -->" + name, price, category, special_offer, price_offer, day_offer, offer_schedule, restaurantId, photo);
        const productUpdated = await productService.updateProduct(name, price, category, special_offer, price_offer, day_offer, offer_schedule, restaurantId,photo, id);
        res.status(200).json(productUpdated);
    }
    catch (error) {
        console.error('Driver error when updating product:', error);
        res.status(500).json({ mensaje: 'Driver error when updating product' });
    }
};

const listAllProducts = async (req, res) => {
    try {
      const allProducts = await productService.listAllProducts();
      res.status(200).json(allProducts);
    }
    catch (error) {
      console.error('Controller error when listing all products:', error);
      res.status(500).json({ mensaje: 'Controller error when listing all products' });
    }
};

const findByIdProduct = async (req, res) => {
    try {
      const id  = req.params.id;
      console.log(id)
      const product = await productService.findByIdProduct(id);
      console.log("res: " + res.status);

      res.status(200).json(product);
    }
    catch (error) {
      console.error('Controller error when searching by id:', error);
      res.status(500).json({ mensaje: 'Controller error when searching by id:' });
    }
};

const deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteProduct = await productService.deleteProduct(id);
      res.status(200).json(deleteProduct);
    }
    catch (error) {
      console.error('Driver error when deleting product:', error);
      res.status(500).json({ mensaje: 'Driver error when deleting product' });
    }
};

module.exports = {
    registerProduct,
    updateProduct,
    findByIdProduct,
    listAllProducts,
    deleteProduct
}