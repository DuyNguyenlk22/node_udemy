const express = require("express");
const { getUserAPI, addNewUser, updateUser, deleteUser, uploadSingleFileApi } = require("../controllers/apiController");
const routerAPI = express.Router();

routerAPI.get("/users", getUserAPI);
routerAPI.post("/users", addNewUser);
routerAPI.put("/users", updateUser);
routerAPI.delete("/users", deleteUser);
routerAPI.post("/file", uploadSingleFileApi);

module.exports = routerAPI;
