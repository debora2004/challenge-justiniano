const mongoose = require('mongoose');

const { MONGODB_URI } = require("./config.js");

mongoose.connect(MONGODB_URI);
mongoose.connection.set('bufferCommands', false);
mongoose.connection.set('socketTimeoutMS', 30000);
mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose is disconnected");
});
