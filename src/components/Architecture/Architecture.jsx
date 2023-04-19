import React from 'react'
import { projects } from '../../array/Projects/projects'
import ArchitectureContainer from '../ArchitectureContainer/ArchitectureContainer';
import s from './Architecture.module.css'


export default function Architecture() {


  return (
    
    <div className={s.arch_pic_array}>
   
   
  {
    projects
    .sort(() => 0.5 - Math.random()).slice(0, 11)
    .map((el) => <ArchitectureContainer {...el} key={el.id} />)
  }
</div>  
    
  )
}






