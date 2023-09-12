import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Foot from './footer/Foot'



export default function Layout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Foot/>
      
      </div>
  )
}
