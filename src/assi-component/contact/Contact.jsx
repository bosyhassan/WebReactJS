import React, { useEffect } from 'react'
import c from '../contact/Contact.module.css'
export default function Contact() {
  useEffect(()=>{
    effect ('.nameel','.label1')
    effect ('.ageel','.label2')
    effect ('.mailel','.label3')
    effect ('.passel','.label4')
  },[])
  function effect (input,label){
    document.querySelector(input).addEventListener('keyup',function(){
      //console.log('hello')
      if(document.querySelector(input).value.length > 0){

    document.querySelector(label).style.top='-10px'
    document.querySelector(label).style.opacity='100%'
    document.querySelector(label).style.zIndex='1000'
      }
      else{
        document.querySelector(label).style.top='20px'
        document.querySelector(label).style.opacity='0'
        document.querySelector(label).style.zIndex='-1'
      }
    })
  }

  return <>
    <div className={c.contain}>
      <div className={c.first}>
        <h2 className={c.wh + " text-uppercase mb-3 fs-1 fw-bolder "}>CONATCT SECTION
        </h2>
        <div className="d-flex align-items-center justify-content-center mb-4">
          <div className={c.lin + " line me-3 "}>
          </div >
          <i className={c.wh + " fa-solid fa-star "}></i>
          <div className={c.lin + " line me-3 "} >
          </div>
        </div>
        <div className={c.forma}>
          <form action="position-relative" >
            <div className="position-relative"> 
            <label className={c.label + ' label1' } htmlFor="">userName</label>
              <input type="text" placeholder="userName" className= "nameel shadow-none form-control border-0 border-bottom py-3 position-relative ng-valid ng-touched ng-dirty"></input>
            </div>
            <div className="position-relative">
            <label className={c.label + ' label2' } htmlFor="">useAge</label>
              <input type="text" placeholder="userAge" className="ageel shadow-none form-control border-0 border-bottom py-3 position-relative ng-valid ng-touched ng-dirty"></input>
            </div>
            <div className="position-relative">
            <label className={c.label + ' label3' } htmlFor="">userEmail</label>
              <input type="text" placeholder="userEmail" className="mailel shadow-none form-control border-0 border-bottom py-3 position-relative ng-valid ng-touched ng-dirty"></input>
            </div>
            <div className="position-relative">
              <label className={c.label + ' label4' } htmlFor="">userPassword</label>
              <input type="text" placeholder="userPassword" className="passel shadow-none form-control border-0 border-bottom py-3 position-relative ng-valid ng-touched ng-dirty"></input>
            </div>
            <button className="btn btn-primary mt-4 " > send Message </button>
          </form>
        </div>

      </div>
    </div>
  </>
}
