import userService from '../services/userService';

const createUser = async (req, res) => {
  const user = req.body;
  const newUser = await userService.create(user);
  return res.status(201).json(newUser);
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.login(email, password);
  res.status(200).json(user);
};

module.exports = {
  createUser,
  userLogin
};