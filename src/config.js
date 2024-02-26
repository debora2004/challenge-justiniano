const { config } = require('dotenv');

config();

const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/restaurant";

module.exports = {
    PORT,
    MONGODB_URI
};