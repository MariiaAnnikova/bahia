import React from 'react'
import { Link } from 'react-router-dom';
import s from './SecondPageContainer.module.css'

export default function SecondPageContainer({ id, avatar, site}) {

  console.log(avatar);
  
  return (
  
       
      
    <div className={s.second_page_container}> 
    <Link to= { `${id}` }>
    
      <div className={s.grid}>
      <img alt='Architectura' src={avatar} className={s.picture}/>
      <p>{site}</p>
      </div>
      </Link>
    
    </div>
    
  )
}
  
