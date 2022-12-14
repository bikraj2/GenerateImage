const mongoose = require('mongoose');
require('dotenv').config();
console.log(process.env)
const connectDB = async () => {
  try {
    await mongoose.connect(
      ''
    );
  } catch (error) {
    throw error;
  }
};
module.exports = connectDB