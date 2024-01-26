const express = require("express");
const { getUserAPI, addNewUser, updateUser, deleteUser, uploadSingleFileApi, uploadMultipleFilesApi } = require("../controllers/apiController");
const {
  postCreateCustomer,
  postCreateCustomerMany,
  getAllCustomer,
  putCustomer,
  deleteCustomer,
  deleteArrayCustomer,
} = require("../controllers/cusController");
const routerAPI = express.Router();

//*api user
routerAPI.get("/users", getUserAPI);
routerAPI.post("/users", addNewUser);
routerAPI.put("/users", updateUser);
routerAPI.delete("/users", deleteUser);

//*api upload file
routerAPI.post("/file", uploadSingleFileApi);
routerAPI.post("/files", uploadMultipleFilesApi);

//* api customer
routerAPI.post("/customer", postCreateCustomer);
routerAPI.post("/customers-many", postCreateCustomerMany);
routerAPI.get("/allCustomer", getAllCustomer);
routerAPI.put("/customer", putCustomer);
routerAPI.delete("/customer", deleteCustomer);
routerAPI.delete("/customers", deleteArrayCustomer);

module.exports = routerAPI;
