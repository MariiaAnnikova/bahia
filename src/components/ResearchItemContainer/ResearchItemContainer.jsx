import React from 'react'
import s from './ResearchItemContainer.module.css'
import { res } from '../../array/Res/res'

export default function ({title, site, status, year, program, description, avatar, photos, item, files, el}) {
  
const link =  files ? (
  <p> <a href={files} download> Download </a> </p>
) : null


    return (
    <div>
        <div className={s.top}>
    <div className={s.res_item_left}>
    
  <h1>{title}</h1>
  <h2>{site}</h2>
  <h3>{status}</h3>
  <h4>{year}</h4>
  <h5>{program}</h5>
  <h4>{description}</h4>

 

  <p> {link } </p>
  
    </div>
  <div className={s.res_item_right}>
  <img src={avatar} alt='t' className={s.avatar} />
    </div>
    
  </div>
 
  <div className={s.arr_res_photo}>
 <p>
  { photos.map(photoUrl => <img src={photoUrl} alt='t' className={s.arr_photo}/> )}
</p>
</div>

</div>

  )
}
