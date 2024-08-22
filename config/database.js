const mongoose = require('mongoose')
require('dotenv').config();

const connectToDatabase = () => {
    mongoose.connect(process.env.URL, {
    })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error(`MongoDB connection error: ${err.message}`);
    });
  };

mongoose.connection.on('Connected', () => {console.log('Connected to db')})
mongoose.connection.on('error', (err) => {console.log(`Mongodb connection error: ${err}`)})

module.exports = connectToDatabase