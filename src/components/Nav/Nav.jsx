import React from 'react'
import s from './Nav.module.css'
import Logo from '../../Css/Logo.png'
import { Link } from 'react-router-dom'


export default function Nav() {
  return (
    <div className={s.nav_block}>
       <Link to='/'><div className={s.nav_logo}><img  src={Logo} alt="Logo" /></div> </Link>
      <div className={s.nav_right}>
     
      <Link to='/architecture'><div className={s.nav_arch}>Architecture</div> </Link>
      <Link to='/reserche'><div className={s.nav_serch}>Research</div></Link>
      <Link to='/about_us'><div className={s.nav_about_us}>About Us</div></Link>
    </div>
    </div>
  )
}
