const Task = require("../models/task");
const aqp = require("api-query-params");

module.exports = {
  createTaskService: async (data) => {
    if (data.type === "EMPTY-TASK") {
      delete data.type;
      let result = await Task.create({ ...data }).exec();
      return result;
    }
  },
  getAllTaskService: async (queryString) => {
    console.log("😐 ~ queryString:👉", queryString);
    let { page } = queryString;
    const { filter, limit, population } = aqp(queryString);
    delete filter.page;
    let offset = (page - 1) * limit;
    result = await Task.find(filter).populate(population).skip(offset).limit(+limit).exec();
    return result;
  },
  updateTaskService: async (data) => {
    let result = await Task.updateOne({ _id: data.id }, { ...data });
    return result;
  },
  deleteTaskService: async (id) => {
    let result = await Task.deleteById({ _id: id });
    return result;
  },
};
