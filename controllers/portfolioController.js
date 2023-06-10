const Project = require("../model/Project");
const data = require("../data");

const getProject = async (req, res) => {
  try {
    const project = await Project.find({});
    res.status(200).json({ message: project });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const createProject = async (req, res) => {
  try {
    const project = await Project.create(data);
    res.status(200).json({ message: project});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const deleteProject = async (req, res) => {
  try {
    const project = await Project.deleteMany();
    res.status(200).json({ message: project});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, startedAt, finishedAt, url, description, image, completed } = req.body;
  const projectDetail = { name, startedAt, finishedAt, url, description, image, completed, _id: id };
  try {
    const project = await Project.findOneAndUpdate(
      { _id: id },
      projectDetail,
      { new: true, runValidators: true }
    );
    if (!project) {
      return res
        .status(404)
        .json({ msg: `No project with id : ${id}` });
    }
    res.status(200).json({ message: project});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getProject,
  createProject,
  deleteProject,
  updateProject,
};
