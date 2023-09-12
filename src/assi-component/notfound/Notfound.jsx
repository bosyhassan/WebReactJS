import React from 'react'
import n from "../notfound/Not.module.css"
export default function Notfound() {
  return <>
    <div className={n.contain}>
      <div className={n.first}>
        <h2 className={n.wh + " text-uppercase mb-3 fs-1 fw-bolder "}>
          (error:404) not found this page</h2>
        <div className="d-flex align-items-center justify-content-center mb-4">
          <div className={n.lin + " line me-3 "}>
          </div >
          <i className={n.wh + " fa-solid fa-star "}></i>
          <div className={n.lin + " line me-3 "} >
          </div>
        </div>
      </div>
    </div>
  </>
}
