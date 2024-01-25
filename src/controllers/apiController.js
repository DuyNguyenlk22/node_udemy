const User = require("../models/user");
const { uploadSingleFile, uploadMultipleFiles } = require("../services/fileService");

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

const uploadSingleFileApi = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  let result = await uploadSingleFile(req.files.image);

  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

const uploadMultipleFilesApi = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  //upload single file =>  file is an object
  //upload multiple file => file is an array
  if (Array.isArray(req.files.image)) {
    //upload multiple file
    let result = await uploadMultipleFiles(req.files.image);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  } else {
    //upload single file
    return await uploadSingleFileApi(req, res);
  }
};

module.exports = {
  getUserAPI,
  addNewUser,
  updateUser,
  deleteUser,
  uploadSingleFileApi,
  uploadMultipleFilesApi,
};
