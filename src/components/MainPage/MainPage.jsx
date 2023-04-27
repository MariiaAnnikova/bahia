import React from 'react'
import Logo from '../../Css/Logo.png'
import s from './MainPage.module.css'
import { Link } from 'react-router-dom'
import {InstagramOutlined} from '@ant-design/icons'
import {FacebookOutlined } from '@ant-design/icons'
import { MailOutlined } from '@ant-design/icons'


export default function MainPage() {
      

return (
  <div> 
  <div className={s.main}>
    <div className={s.logo}>  <Link to='galery'>
      
      <div className={s.logo_title}>
      <h1>imagine beautiful things</h1>
      <h1>this what we do</h1>
      </div>
      <img  src={Logo} alt='Logo'/> 

   </Link>
   </div>  
  
   </div>
   
{/*    
   {   posthog.has_opted_in_capturing() || posthog.has_opted_out_capturing() ? null : <CookiesBanner /> }  
 
  */}
<footer>
  <div className={s.social_icons}>
<InstagramOutlined />
<FacebookOutlined />
<MailOutlined />
</div>
</footer>
 
  
   </div>
  )
}

