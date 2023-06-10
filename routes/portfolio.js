const express = require("express");
const router = express.Router();
const {
  getProject,
  createProject,
  deleteProject,
  updateProject,
} = require("../controllers/portfolioController");

router
  .route("/projects")
  .get(getProject)
  .post(createProject)
  .delete(deleteProject);
router.route("/projects/:id").patch(updateProject);

module.exports = router;
