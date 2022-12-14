const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});
const Image = require('../models/images');
const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
  console.log("here")
  const prompt = req.query.prompt;
  const userId = req.headers.userid;
  try {
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: '512x512',
    });
    const image_url = response.data.data[0].url;
    const newImage = new Image({
      prompt: prompt,
      createdBy: userId,
      src:image_url
    });
  
    const newIamge = await newImage.save();
    res.status(200).json({ image: image_url });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
const getImages = async (req, res) => {
  const userId = req.headers.userid;
  try {
    const images = await Image.find({createdBy:userId})
    res.status(200).json({message:true,images:images})
  } catch (e) {
    res.status(400).json({message:e.message})
  }
};
module.exports = {
  generateImage,
  getImages
};
