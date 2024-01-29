const express = require("express");
const {
  getUserAPI,
  addNewUser,
  updateUser,
  deleteUser,
  uploadSingleFileApi,
  uploadMultipleFilesApi,
} = require("../controllers/apiController");
const {
  postCreateCustomer,
  postCreateCustomerMany,
  getAllCustomer,
  putCustomer,
  deleteCustomer,
  deleteArrayCustomer,
} = require("../controllers/cusController");
const {
  postCreateEmptyProject,
  getAllProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");
const {
  createNewTask,
  getAllTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasksController");
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

//* api project
routerAPI.post("/projects", postCreateEmptyProject);
routerAPI.get("/projects", getAllProject);
routerAPI.put("/projects", updateProject);
routerAPI.delete("/projects", deleteProject);

//* api tasks
routerAPI.post("/tasks", createNewTask);
routerAPI.get("/tasks", getAllTask);
routerAPI.put("/tasks", updateTask);
routerAPI.delete("/tasks", deleteTask);

module.exports = routerAPI;
