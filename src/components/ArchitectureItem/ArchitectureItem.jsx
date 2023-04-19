import React from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../../array/Projects/projects';
import ProjectItemContainer from '../ProjectItemContainer/ProjectItemContainer';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

export default function ArchitectureItem({p}) {


    const {id} = useParams();
    console.log(id);
    
    const project =  projects.find(p => p.id === id);

    if (project) {
      return <ProjectItemContainer {...p} key={p.id} /> 
} else {
      return <NotFoundPage />;

    }
      }