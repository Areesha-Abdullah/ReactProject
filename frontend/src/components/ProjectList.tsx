import { useEffect, useState } from "react";
import { getProjects, deleteProject } from "../api";

interface Project { 
    id: number;
    name: string;
}

const ProjectList = ({ refresh, onProjectDeleted }: { refresh: boolean; onProjectDeleted: () => void }) => {
    const [projects, setProjects] = useState<Project[]>([]);
    
    useEffect(()=>{
        fetchProjects();
    },[refresh]);

    const fetchProjects = async()=>{
        try{
            const data = await getProjects();
            setProjects(data);
        } catch(error){
           console.error("Error fetching projects:" , error)
        }
    };

    const handleDelete = async (id: number) => {
        await deleteProject(id);
        fetchProjects();
        onProjectDeleted(); // Update project count
    };

    return(
        <div className="container2">
          <ul>
          <h2 >Projects List</h2>
            {projects.map((project) => (
              <li key={project.id}>
                {project.name}{" "}
                <button onClick={() => handleDelete(project.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
    );
};

export default ProjectList;
