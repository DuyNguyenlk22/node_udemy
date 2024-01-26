const Customer = require("../models/customer");
const aqp = require("api-query-params");

module.exports = {
  createCusService: async (name, address, phone, email, description, imageURL) => {
    try {
      let result = await Customer.create({ name, address, phone, email, description, image: imageURL });
      return result;
    } catch (error) {
      console.log("😐 ~ error:👉", error);
    }
  },
  createCusManyService: async (customer) => {
    try {
      let result = await Customer.insertMany(customer);
      return result;
    } catch (error) {
      console.log("😐 ~ createCusManyService: ~ error:👉", error);
    }
  },
  getAllCustomerService: async (limit, page, name, queryString) => {
    try {
      let result = null;
      if (limit && page) {
        let offset = (Number(page) - 1) * Number(limit);
        const { filter } = aqp(queryString);
        delete filter.page;
        result = await Customer.find(filter).skip(offset).limit(+limit).exec();
      } else {
        result = await Customer.find();
      }
      return result;
    } catch (error) {
      console.log("😐 ~ error:👉", error);
    }
  },
  updateCustomerService: async (_id, name, address, email) => {
    try {
      let newData = await Customer.updateOne({ _id }, { name, address, email });
      return newData;
    } catch (error) {
      console.log("😐 ~ updateCustomerService: ~ error:👉", error);
    }
  },
  deleteCustomerService: async (_id) => {
    try {
      let result = await Customer.deleteById({ _id });
      return result;
    } catch (error) {
      console.log("😐 ~ updateCustomerService: ~ error:👉", error);
    }
  },
  deleteArrayCustomerService: async (customerID) => {
    try {
      let result = await Customer.delete({ _id: { $in: customerID } });
      return result;
    } catch (error) {
      console.log("😐 ~ deleteArrayCustomerService: ~ error:👉", error);
    }
  },
};
