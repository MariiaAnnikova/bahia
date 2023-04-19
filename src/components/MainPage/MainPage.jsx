import React from 'react'
import Logo from '../../Css/Logo.png'
import s from './MainPage.module.css'
import { Link } from 'react-router-dom'
import LogoUp from '../../Css/LogoUp.png'
export default function MainPage() {
      

return (
  <div className={s.main}>
    <div className={s.logo}>  <Link to='galery'>
      
      <img  src={LogoUp} alt='beautiful' /> 
      <img  src={Logo} alt='Logo'/> 

   </Link>
   </div>  
   </div>
  )
}
