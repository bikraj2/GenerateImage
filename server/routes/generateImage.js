const express = require('express')
const {generateImage}  = require('../methods/generateImage')
const imageRouter = express.Router()


imageRouter.route('/').get(generateImage)

module.exports={
    imageRouter
}