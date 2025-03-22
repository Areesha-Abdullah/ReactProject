const mockDB = require('../models/mockDB');

const getProjects = (req, res) => {
  res.json(mockDB.getProjects());
};

const addProject = (req, res) => {
const { name } = req.body;

  if (!name || name.trim().length < 3) {
    return res.status(400).json({ error: 'Project name must be at least 3 characters long.' });
  }

    const newProject = mockDB.addProject(name.trim());
  res.status(201).json(newProject);
};

const deleteProject = (req, res) => {
  const id = parseInt(req.params.id);
  const deletedProject = mockDB.deleteProject(id);

  if (!deletedProject) {
    return res.status(404).json({ error: 'Project not found.' });
  }

  res.json(deletedProject);
};

const getProjectCount = (req, res) => {
  res.json({ count: mockDB.getProjectCount() });
};

module.exports = {
    getProjects,
    getProjectCount,
    deleteProject,
    addProject
}