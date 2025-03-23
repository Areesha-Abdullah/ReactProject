let projects = [];
let nId = 0;

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
  deleteAllProjects: ()=>{
    projects = []; 
    nId = 0;

  },
  getProjectCount: () => projects.length,
};
