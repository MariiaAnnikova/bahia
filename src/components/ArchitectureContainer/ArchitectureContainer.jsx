import React from 'react'
import s from './ArchitectureContainer.module.css'
import { Link } from 'react-router-dom'

export default function ArchitectureContainer({id, avatar}) {
  return (
    <div  className={s.architecture_container}> 
    <Link to= { `${id}` }>
    
      <div className={s.architecture_grid}>
      <img alt='Architectura' src={avatar} className={s.arch_avatar}/>
      </div>
      </Link>
    
    </div>
  )
}
