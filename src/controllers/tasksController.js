const {
  createTaskService,
  getAllTaskService,
  updateTaskService,
  deleteTaskService,
} = require("../services/tasksService");

module.exports = {
  createNewTask: async (req, res) => {
    let result = await createTaskService(req.body);
    res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  getAllTask: async (req, res) => {
    let result = await getAllTaskService(req.query);
    res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  updateTask: async (req, res) => {
    let result = await updateTaskService(req.body);
    res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  deleteTask: async (req, res) => {
    let result = await deleteTaskService(req.body.id);
    res.status(200).json({
      EC: 0,
      data: result,
    });
  },
};
