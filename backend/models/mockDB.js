let projects = [
    { id: 1, name: 'VanillaJS Project' },       
  { id: 2, name: 'React Project' },
  { id: 3, name: 'Node Project' },
  { id: 4, name: 'Angular Project' },
  { id: 5, name: 'Python Project' },
];
let nId = 6;

console.log("mockdb activated")
module.exports = {
    getProjects: () => {
        console.log("MockDB Projects:", projects);
        return projects;
    },
  addProject: (name) => {
    const newProject = { id: nId++, name };
    projects.push(newProject);
    return newProject;
  },
  deleteProject: (id) => {
    const index = projects.findIndex((project) => project.id === id);
    if (index !== -1) {
      return projects.splice(index, 1)[0]; 
    }
    return null;
  },
  getProjectCount: () => projects.length,
};
