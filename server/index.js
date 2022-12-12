const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const { imageRouter } = require('./routes/generateImage');
const { userRouter } = require('./routes/user');
const connectDB = require('./config/connectDb');
const { connection } = require('mongoose');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use('/image', imageRouter);
app.use('/user', userRouter);
const PORT = process.env.PORT || 5000;
const connect = async () => {
  try {
    connectDB();
    app.listen(PORT, () => {
      console.log(`Server is Listening on port: ${PORT}`);
    });
  } catch (e) {
    console.log(`Error Occured: ${e.message}`);
  }
};
connect();
