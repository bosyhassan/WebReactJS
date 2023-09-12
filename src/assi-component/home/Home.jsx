import React from 'react'
import h from "../home/Home.module.css"
export default function Home() {
  return <>
    <div className={h.contain }>
      <div className={h.first}>
        <i className={h.icon + ' fa-solid fa-user fa-beat-fade'}></i>
        <h2 className="text-uppercase mb-3 fs-1 fw-bolder text-white">start Framework</h2>
        <div className="d-flex align-items-center justify-content-center mb-4">
          <div className={h.lin + " line me-3 bg-white " }>
          </div >
          <i className="fa-solid fa-star text-white"></i>
          <div className={h.lin + " line me-3 bg-white " } >
          </div>
        </div>
        <div className="text-white">Graphic Artist - Web Designer - Illustrator</div>
      </div>
    </div>
  </>
}
