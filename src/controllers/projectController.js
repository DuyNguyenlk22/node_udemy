const {
  createEmptyProjectService,
  getProjectService,
  updateProjectService,
  deleteProjectService,
} = require("../services/projectService");

module.exports = {
  postCreateEmptyProject: async (req, res) => {
    let result = await createEmptyProjectService(req.body);
    res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  getAllProject: async (req, res) => {
    let result = await getProjectService(req.query);
    res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  updateProject: async (req, res) => {
    let result = await updateProjectService(req.body);
    res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  deleteProject: async (req, res) => {
    let result = await deleteProjectService(req.body);
    res.status(200).json({
      EC: 0,
      data: result,
    });
  },
};
