import React from 'react'
import { projects } from '../../array/Projects/projects'
import ProjectItemContainer from '../ProjectItemContainer/ProjectItemContainer'
import { useParams } from 'react-router-dom'
import NotFoundPage from '../NotFoundPage/NotFoundPage'

export default function ProjectItem({p}) {


  const {id} = useParams();
  console.log( id);
  
  //projects.map(p => console.log(p));
  console.log(projects.find(p => p.id == id));
const project =  projects.find(p => p.id == id);
  if (project) {
    console.log(project);
    return <ProjectItemContainer {...project} key={project.id} /> 
   } else {

   return <NotFoundPage />

  
    
  }
    }

 
