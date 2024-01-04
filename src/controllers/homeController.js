const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDservice");
const User = require("../models/user");

const getHomepage = async (req, res) => {
  return res.render("homepage.ejs", { listUser: await User.find({}) });
};

const getAbc = (req, res) => {
  res.render("sample.ejs");
};

const getCreatePage = (req, res) => {
  res.render("createUser.ejs");
};

const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;

  // connection.query(
  //   `INSERT INTO Users (email, name, city)
  //   VALUES (?, ?, ? )`,
  //   [email, name, city],
  //   (err, results) => {
  //     console.log("😐 ~ postCreateUser ~ results:👉", results);
  //     res.send("Created new user");
  //   },
  // );

  // const [results, fields] = await connection.query(
  //   `INSERT INTO Users (email, name, city)
  //     VALUES (?, ?, ? )`,
  //   [email, name, city],
  // );
  await User.create({ email, name, city });

  res.send("Created new user");
};

const getUpdatePage = async (req, res) => {
  let { userId } = req.params;
  // let user = await getUserById(userId)
  let user = await User.findById(userId).exec();
  res.render("edit.ejs", { userById: user });
};

const putUpdateUser = async (req, res) => {
  let { email, name, city, id } = req.body;
  // await updateUserById(email, name, city, id);
  await User.updateOne({ _id: id }, { $set: { email, name, city } });

  res.redirect("/");
};

const getUserDelete = async (req, res) => {
  let { userId } = req.params;

  res.render("delete.ejs", { userById: await User.findById(userId).exec() });
};

const deleteUser = async (req, res) => {
  let { id } = req.body;
  // await deleteUserById(id);
  await User.deleteOne({ _id: id });
  res.redirect("/");
};
module.exports = {
  getHomepage,
  getAbc,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  putUpdateUser,
  getUserDelete,
  deleteUser,
};
