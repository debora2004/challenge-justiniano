const express = require('express');
const bodyParser = require('body-parser');
const restaurantController = require('./controllers/restaurantController');
const multer = require('multer');
require('./database');

const storage = multer.diskStorage({
  destination: '/src/uploads/',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1]);
  }
});

const upload = multer({ storage });
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.post('/restaurant', upload.single('photo'), restaurantController.registerRestaurant); 
app.put('/restaurant/:id', upload.single('photo'), restaurantController.updateRestaurant);
app.get('/restaurant',   restaurantController.listAllRestaurant);
app.get('/restaurant/:id', restaurantController.findByIdRestaurant);
app.delete('/restaurant/:id', restaurantController.deleteRestaurant);

module.exports = app;
