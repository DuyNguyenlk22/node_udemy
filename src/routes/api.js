const express = require("express");
const { getUserAPI, addNewUser, updateUser, deleteUser } = require("../controllers/apiController");
const routerAPI = express.Router();

routerAPI.get("/users", getUserAPI);
routerAPI.post("/users", addNewUser);
routerAPI.put("/users", updateUser);
routerAPI.delete("/users", deleteUser);

module.exports = routerAPI;
