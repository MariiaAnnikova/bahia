import React from 'react'
import s from './ArchitectureItemContainer.module.css'

export default function ArchitectureItemContainer({title, site, status, year, program, description, avatar, photos}){

 
  return (
    <div>  
<div className={s.top}>
    <div className={s.arch_item_left}>
  <img src={avatar} alt='t' className={s.avatar} />
    </div>
  <div className={s.arch_item_right}>
  <h1>{title}</h1>
  <h2>{site}</h2>
  <h3>{status}</h3>
  <h4>{year}</h4>
  <h5>{program}</h5>
  </div>
  </div> 

  <div className={s.arch_descr}>
  <h4>{description}</h4>
  </div>
  <div className={s.arr_arch_photo}>
 <p>
  { photos.map(photoUrl => <img src={photoUrl} alt='t' className={s.arr_photo}/> )}
</p>
</div>
</div> 

)}