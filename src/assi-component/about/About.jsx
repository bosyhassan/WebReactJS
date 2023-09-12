import React from 'react'
import a from '../about/About.module.css'

export default function About() {
  return <>
    <div className={a.contain}>
      <div className={a.first}>
        <h2 className="text-uppercase mb-3 fs-1 fw-bolder text-white">ABOUT COMPONENT</h2>
        <div className="d-flex align-items-center justify-content-center mb-4">
          <div className={a.lin + " line me-3 bg-white "}>
          </div >
          <i className="fa-solid fa-star text-white"></i>
          <div className={a.lin + " line me-3 bg-white "} >
          </div>
        </div>
        <div className={a.cen}>
          <div className="text-white">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
          <div className="text-white">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
        </div>
      </div>
    </div>
  </>
}
