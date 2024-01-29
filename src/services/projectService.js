const Project = require("../models/project");
const aqp = require("api-query-params");

module.exports = {
  createEmptyProjectService: async (data) => {
    try {
      if (data.type === "EMPTY-PROJECT") {
        let newData = await Project.create({
          name: data.name,
          startDate: data.startDate,
          endDate: data.endDate,
          description: data.description,
          customerInfor: data.customerInfor,
          leader: data.leader,
        });
        return newData;
      }
      if (data.type === "ADD-USERS") {
        let myProject = await Project.findById(data.projectsId).exec();
        for (let i = 0; i < data.usersArr.length; i++) {
          myProject.usersInfor.push(data.usersArr[i]);
        }
        let newResult = await myProject.save();
        return newResult;
      }
      if (data.type === "REMOVE-USERS") {
        let myProject = await Project.findById(data.projectsId).exec();
        for (let i = 0; i < data.usersArr.length; i++) {
          myProject.usersInfor.pull(data.usersArr[i]);
        }
        let newResult = await myProject.save();
        return newResult;
      }
      if (data.type === "ADD-TASKS") {
        let myProject = await Project.findById(data.projectsId).exec();
        for (let i = 0; i < data.tasksArr.length; i++) {
          myProject.tasks.push(data.tasksArr[i]);
        }
        let newResult = await myProject.save();
        return newResult;
      }
      return null;
    } catch (error) {
      console.log("😐 ~ error:👉", error);
    }
  },

  getProjectService: async (data) => {
    let { page } = data;
    const { filter, limit, population } = aqp(data);
    delete filter.page;
    let offset = (page - 1) * limit;
    result = await Project.find(filter).populate(population).skip(offset).limit(+limit).exec();
    return result;
  },

  updateProjectService: async (data) => {
    console.log("😐 ~ updateProjectService: ~ data:👉", data);
    let result = await Project.updateOne({ _id: data._id }, { ...data });
    return result;
  },

  deleteProjectService: async (data) => {
    let { _id } = data;
    console.log("😐 ~ deleteProjectService: ~ _id:👉", _id);
    let result = await Project.deleteById({ _id });
    return result;
  },
};
