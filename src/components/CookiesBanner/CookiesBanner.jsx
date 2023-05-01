import React from 'react'
import s from './CookiesBanner.module.css'

import CookieConsent from "react-cookie-consent";


export default function CookiesBanner({banner}) {

  <CookieConsent
  onAccept={(acceptedByScrolling) => {
    if (acceptedByScrolling) {
      // triggered if user scrolls past threshold
      alert("Accept was triggered by user scrolling");
    } else {
      alert("Accept was triggered by clicking the Accept button");
    }
  }}
></CookieConsent>

{<CookieConsent
  enableDeclineButton
  onDecline={() => {
    alert("nay!");
  }}
></CookieConsent>}

// const [showBanner, setShowBanner] = useState(true);

//   const acceptCookies = () => {
//     posthog.opt_in_capturing();
//     setShowBanner(false);
//   }

//   const declineCookies = () => {
//     posthog.opt_out_capturing();
//     setShowBanner(false);
//  }

  return (
    <CookieConsent
  location="bottom"
  buttonText="I agree!"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#000000" , bottom: '90px'}}
  buttonStyle={{ color: "#000000", fontSize: "15px" }}
  expires={250}
 
 >
'We use cookies on our website to give you the most relevant experience by remembering your preferences and repeat visits. By clicking “Accept All”, you consent to the use of ALL the cookies. However, you may visit "Cookie Settings" to provide a controlled consent. Privacy Policy'{" "}
  <span style={{ fontSize: "14px" }}></span>
</CookieConsent>


  
//      <div> 
// { showBanner && ( 
 
//       <div className={s.banner}>
//         <p>We use cookies to make our work better. Please accept!</p>
//         <button onClick={acceptCookies}> Accept </button>
//         <button onClick={declineCookies}> Decline </button>
//     </div> )}
//     </div>
  )
}
