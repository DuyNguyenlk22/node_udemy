const User = require("../models/user");

const getUserAPI = async (req, res) => {
  const results = await User.find({});
  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};
const addNewUser = async (req, res) => {
  let { email, name, city } = req.body;
  let user = await User.create({ email, name, city });
  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};
const updateUser = async (req, res) => {
  let { email, name, city, id } = req.body;
  let user = await User.updateOne({ _id: id }, { $set: { email, name, city } });
  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};
const deleteUser = async (req, res) => {
  let { id } = req.body;
  let user = await User.deleteOne({ _id: id });
  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};

module.exports = {
  getUserAPI,
  addNewUser,
  updateUser,
  deleteUser,
};
