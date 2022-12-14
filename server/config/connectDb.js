const mongoose = require('mongoose');
require('dotenv').config();
console.log(process.env)
const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://bikraj2:Hellohi@cluster0.vsnhb.mongodb.net/?retryWrites=true&w=majority'
    );
  } catch (error) {
    throw error;
  }
};
module.exports = connectDB