const express = require('express');
const { createUser,login } = require('../methods/user');
const userRouter = express.Router();

userRouter.route('/').get(login).post(createUser);

module.exports = {
 userRouter,
};
