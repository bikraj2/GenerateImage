const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {

    const prompt = req.query.prompt
    
    try{
      const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: '512x512',
    });
    const iamge_url = response.data.data[0].url;
    console.log(iamge_url);
    res.status(200).json({ image: iamge_url });
    }catch(e){
      res.status(400).json({error:e})
    }
};


module.exports ={
    generateImage
}