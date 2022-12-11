const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const cors = require('cors')
const {imageRouter } = require('./routes/generateImage')


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use('/image', imageRouter);
const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`)
})