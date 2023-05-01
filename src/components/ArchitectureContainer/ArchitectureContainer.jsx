import React from 'react'
import s from './ArchitectureContainer.module.css'
import { Link } from 'react-router-dom'

export default function ArchitectureContainer({id, avatar, site}) {
  return (
    <div  className={s.architecture_grid}> 
    <Link to= { `${id}` }>
    
      <img alt='Architectura' src={avatar} className={s.arch_avatar}/>
      </Link>
      <p>{site}</p>
     
   
    
    </div>
  )
}
