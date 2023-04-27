import React from 'react'
import  us  from '../../Css/us.jpg'
import s from './AboutUs.module.css'

export default function AboutUs() {
  
  return (
    
    <div className={s.us_block}>
      <div>
      <img src={ us } alt='us' className={s.photo_us}/>
      </div>
      <div className={s.us_down}>
      <div className={s.us_left}>
      <p>AtelierBahia è uno studio di progettazione e ricerca architettonica fondato da Matheus Cartocci e Gloria Cota Visedo. </p>
      <p>Matheus Cartocci ha conseguito un dottorato di ricerca presso il Politecnico di Torino e investiga le tensioni tra architettura costruita e architettura scritta. </p>
      <p>Gloria Cota è architetta e laureata in Belle Arti, ed ha conseguito un master in composizione spaziale floreale.</p><p> Insieme, nelle colline dell’Appenino Ligure, tra i faggi e le querce, portano avanti progetti di architettura, restauro e ricerca critica. </p></div>
      <div className={s.us_right}>
      <p>AtelierBahia is an architecture and research practice founded by Matheus Cartocci and Gloria CotaVisedo.</p>
      <p> Matheus Cartocci has obtained a PhD in architecture history and theory at Politecnico di Torino and investigates the relations between the built and written narration in the discipline.</p>
      <p> Gloria Cota Visedo obtained a double degree in architecture and fine arts in Madrid and has obtained a master in floral spatial composition. </p>
      <p>Together, in the green hills of the Ligurian Appenino, among oak and beech tree forests, they carry out architecture, historical renovation and research project.</p>
      </div>
      </div>
      </div>
  )
}
