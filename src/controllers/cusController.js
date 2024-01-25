const Customer = require("../models/customer");
const {
  createCusService,
  createCusManyService,
  getAllCustomerService,
  updateCustomerService,
  deleteCustomerService,
} = require("../services/customerService");
const { uploadSingleFile } = require("../services/fileService");

//{key: value}
module.exports = {
  postCreateCustomer: async (req, res) => {
    let { name, address, phone, email, description } = req.body;
    let imageURL = "";
    if (!req.files || Object.keys(req.files).length === 0) {
    } else {
      let result = await uploadSingleFile(req.files.image);
      imageURL = result.path;
    }
    let customer = await createCusService(name, address, phone, email, description, imageURL);
    res.status(200).json({
      EC: 0,
      data: customer,
    });
  },

  postCreateCustomerMany: async (req, res) => {
    let { customer } = req.body;
    let results = await createCusManyService(customer);
    res.status(200).json({
      EC: 0,
      data: results,
    });
  },

  getAllCustomer: async (req, res) => {
    let customers = await getAllCustomerService();
    res.status(200).json({
      EC: 0,
      data: customers,
    });
  },

  putCustomer: async (req, res) => {
    let { _id, name, address, email } = req.body;
    let result = await updateCustomerService(_id, name, address, email);
    res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  deleteCustomer: async (req, res) => {
    let { _id } = req.body;
    let result = await deleteCustomerService(_id);
    res.status(200).json({
      EC: 0,
      data: result,
    });
  },
};
