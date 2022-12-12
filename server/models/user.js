const mongoose = require('mongoose')


const user = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model('users',user)