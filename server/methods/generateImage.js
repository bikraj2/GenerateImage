const { Configuration, OpenAIApi } = require('openai');
const config = require('config');
const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
  const prompt = req.query.prompt;

  try {
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: '512x512',
    });
    const iamge_url = response.data.data[0].url;
    console.log(iamge_url);
    res.status(200).json({ image: iamge_url });
  } catch (e) {
    console.log(e.message);
    res.status(400).json({ error: e });
  }
};

module.exports = {
  generateImage,
};
