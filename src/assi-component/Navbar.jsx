import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <><div className="navcontainer py-4">
      <div className="container-fluid display-inline navitem">
        <NavLink className="nav-link text-white text-white text-uppercase fw-bolder fs-2" to="start">Start Framwork</NavLink>
        <div className="gap-50">
          <ul className="ullist">
            <li className="nav-item">
              <NavLink className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" to="about">About</NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" to="portfolio">Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" to="contact">Contact</NavLink>
            </li>

          </ul>

        </div>
      </div>
    </div>
    </>
  )
}
