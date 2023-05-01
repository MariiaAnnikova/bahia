import React from 'react'
import { InstagramOutlined } from '@ant-design/icons'
import { FacebookOutlined } from '@ant-design/icons';
import { MailOutlined } from '@ant-design/icons';
import s from './Footer.module.css'
import { PhoneOutlined } from '@ant-design/icons'

export default function Footer() {

    // const onClickMailtoHandler = () => {
    //     window.location.href = "mailto:info@atelierBahia.com?subject=Mail from Our Site&body=Here is some text";
    //   }
  return (
    <div className={s.footer}>
        <footer>
  <div className={s.social_icons}>

<a href="mailto:info@atelierbahia.com"><MailOutlined /></a>

<PhoneOutlined />

</div>
<div className={s.copyright}><p>@ 2023 Atelier Bahia.Architecture and design.All right reserved.</p></div>
</footer>
    </div>
  )
}
