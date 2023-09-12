import React from 'react'
import p from '../portfolio/portfolio.module.css'
import mg1 from '../../../src/media/poert1.png'
import mg2 from '../../../src/media/port2.png'
import mg3 from '../../../src/media/port3.png'
export default function Portfolio() {
  return <>
    <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          <img className='w-100' src={mg1} alt="png" />
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          <img className='w-100' src={mg2} alt="png" />
          </div>
        </div>
      </div>
    </div><div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          <img className='w-100' src={mg3} alt="png" />
          </div>
        </div>
      </div>
    </div><div className="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          <img className='w-100' src={mg1} alt="png" />
          </div>
        </div>
      </div>
    </div><div className="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          <img className='w-100' src={mg2} alt="png" />
          </div>
        </div>
      </div>
    </div><div className="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          <img className='w-100' src={mg3} alt="png" />
          </div>
        </div>
      </div>
    </div>
    <div className={p.contain}>
      <div className={p.first}>
        <h2 className={p.wh + " text-uppercase mb-3 fs-1 fw-bolder "}>
          PORTFOLIO COMPONENT</h2>
        <div className="d-flex align-items-center justify-content-center mb-4">
          <div className={p.lin + " line me-3 "}>
          </div >
          <i className={p.wh + " fa-solid fa-star "}></i>
          <div className={p.lin + " line me-3 "} >
          </div>
        </div>
        <div className={p.photos}>
          <div data-bs-toggle="modal" data-bs-target="#exampleModal1">
            <img src={mg1} alt="png" />
            <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
          <div data-bs-toggle="modal" data-bs-target="#exampleModal2">
            <img src={mg2} alt="png" />
            <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
          <div data-bs-toggle="modal" data-bs-target="#exampleModal3">
            <img src={mg3} alt="png" />
            <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
          <div data-bs-toggle="modal" data-bs-target="#exampleModal4">
            <img src={mg1} alt="png" />
            <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
          <div data-bs-toggle="modal" data-bs-target="#exampleModal5">
            <img src={mg2} alt="png" />
            <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
          <div data-bs-toggle="modal" data-bs-target="#exampleModal6">
            <img src={mg3} alt="png" />
            <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>

      </div>
    </div>
  </>
}
