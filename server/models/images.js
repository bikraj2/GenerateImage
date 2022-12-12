const mongoose = require('mongoose')
const user = require('./user')
const images = mongoose.Schema({
  prompt: {
    type: String,
    require: true,
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: user,
    required: [true, 'Please provide user'],
  },
  src:{
    type:String,
    require:true
  }
});

module.exports=mongoose.model('images',images)