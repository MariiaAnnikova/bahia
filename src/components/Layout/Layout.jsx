import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'
import CookiesBanner from '../CookiesBanner/CookiesBanner'
import { useState } from 'react'


export default function Layout() {

  const [ menuActive, setMenuActive ] = useState(false);
  return (
    <div>
        <Nav menuActive={menuActive} setMenuActive={setMenuActive} />
      <main>
        <Outlet />
      </main>
      <CookiesBanner />
    </div>
  )
}
