import React from 'react'

export default function ArchitectureItemContainer({title}) {
  return (
    <div>
         <p>{ title}</p>
          <p>{ project.site}</p>
          <p>{ project.status}</p>
         <p>{project.year}</p>
         <p>{project.program}</p>
        <p>{project.description} </p>
         
       <img alt='Architectura' src={project.avatar}/>
         <img alt='Architectura' src={project.photo_1}/>
    </div>
  )
}
