import React from 'react'
import  us  from '../../Css/us.jpg'
import s from './AboutUs.module.css'
import { EnvironmentOutlined } from '@ant-design/icons'
import { PhoneOutlined } from '@ant-design/icons'
import { MailOutlined} from '@ant-design/icons'


export default function AboutUs() {
  
  return (
    
   <div className={s.us_block}>
      <div className={s.photo_us}>
      <img src={ us } alt='us'/>
      </div>

      <div className={s.us_info}>
      <div className={s.us_up}>
      <p>AtelierBahia is an architecture and research practice founded by Matheus Cartocci and Gloria CotaVisedo.
      Matheus Cartocci has obtained a PhD in architecture history and theory at Politecnico di Torino and investigates the relations between the built and written narration in the discipline.
       Gloria Cota Visedo obtained a double degree in architecture and fine arts in Madrid and has obtained a master in floral spatial composition. 
      Together, in the green hills of the Ligurian Appenino, among oak and beech tree forests, they carry out architecture, historical renovation and research project.</p>
      </div>

      <div className={s.us_down}>
      <p>AtelierBahia è uno studio di progettazione e ricerca architettonica fondato da Matheus Cartocci e Gloria Cota Visedo. Matheus Cartocci ha conseguito un dottorato di ricerca presso il Politecnico di Torino e investiga le tensioni tra architettura costruita e architettura scritta. 
      Gloria Cota è architetta e laureata in Belle Arti, ed ha conseguito un master in composizione spaziale floreale Insieme, nelle colline dell’Appenino Ligure, tra i faggi e le querce, portano avanti progetti di architettura, restauro e ricerca critica.</p>
      </div>
         


      </div>
    <div className={s.contact_block}> 
  <h3>Contacts:</h3>
  <div className={s.us_map}>
    <div><EnvironmentOutlined className={s.info_icons}/> Italy (AL) Cabella ligure, via Strada Provinciale 140, 15060</div>
  
    <div className={s.us_google_map}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1418.5670013453916!2d9.091572055148852!3d44.67604208820097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4787568ae8e3dff3%3A0x2751628f8354d0d8!2sStrada%20Provinciale%20140%2C%2030%2C%2015060%20Cabella%20Ligure%20AL!5e0!3m2!1sen!2sit!4v1682761606096!5m2!1sen!2sit" 
    width="250" 
    height="250" 
    style={{border:'0'}} 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">

    </iframe>
    </div>
    </div>
  
  <div className={s.info_icons_phone}>
    <PhoneOutlined/> 
       <p className={s.ph_buddha}>Arch. PhD. Matheus Cartocci: + 39 3394530633. </p>
       <p className={s.ph_gloria}>Arch. Gloria Cota Visedo: + 39 3404027427</p>
  </div>
  
  <p><MailOutlined  className={s.info_icons}/> info@atelierbahia.com</p>

    
     </div> 
     </div> 
      
  )
}
