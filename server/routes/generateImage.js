const express = require('express')
const {generateImage,getImages}  = require('../methods/images')
const imageRouter = express.Router()


imageRouter.route('/').get(generateImage)
imageRouter.route('/all').get(getImages);

module.exports={
    imageRouter
}