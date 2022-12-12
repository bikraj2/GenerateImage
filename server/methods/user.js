const User = require('../models/user');

const createUser = async (req, res) => {
    console.log(req.body.username)
  try {
    const newUser = new User({
      username: req.body.username,
    });
    const user = await newUser.save();
    res.status(200).json({ message: 'User Created', user: user });
  } catch (error) {
    res.status(400).json({ e: error.message });
  }
};
const login = async (req, res) => {
  const username = req.body.username;
  try {
    const user = await User.find({ username: username });
    res
      .status(200)
      .json({ message: 'User exist and is Logged In', user: user });
  } catch (error) {
    res.status(400).json({ e: error });
  }
};

module.exports = {
  createUser,
  login,
};
