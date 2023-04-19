import React from 'react'


export default function ProjectItemContainer({ title, site, status, year, program, description, avatar, photo_1}) {


  return (
    <div>
      <p>{ title}</p>
          <p>{ site}</p>
          <p>{ status}</p>
         <p>{year}</p>
         <p>{program}</p>
        <p>{description} </p>
         
        <img src={avatar} alt='Architectura'/>
         <img src={photo_1} alt='Architectura'/>
    </div>
  )
}

