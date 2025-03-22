const express = require('express')
const router = express.Router();
const projectController = require('../controllers/projectController')

// router.get('/', (req, res) => {
//     res.json({ message: 'Projects API is working' });
// });
router.get('/', projectController.getProjects);
router.post('/',projectController.addProject);
router.delete('/:id', projectController.deleteProject)
router.get('/count', projectController.getProjectCount)

module.exports = router;