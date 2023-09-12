import React from 'react'
import fot from "../footer/Footer.module.css"
export default function Foot() {
  return (<>
    <div className={fot.bl}>
      <div className={fot.last}>
        <div class={fot.wid + ' card-body text-center'} >
          <h3 >LOCATION</h3>
          <p >2215 John Daniel Drive</p>
          <p >Clark, MO 65243</p>
        </div>
        <div className={fot.wid + " card-body text-center"}>
          <h3 >AROUND THE WEB</h3>
          <div class="icons">
            <i class="fa-brands fa-facebook mx-2 "></i>
            <i class="fa-brands fa-twitter mx-2 icon"></i>
            <i class="fa-brands fa-linkedin-in mx-2 icon"> </i>
            <i class="fa-solid fa-globe mx-2 icon"> </i>
          </div>
        </div>
        <div className={fot.wid + ' card-body text-center'}>
          <h3 >ABOUT FREELANCER</h3>
          <p > Freelance is a free to use, licensed Bootstrap theme created by Route </p>
        </div>

      </div>
      <div class={fot.copy}>
        <p >Copyright © Your Website 2021</p>
      </div>
    </div>
  </>
  )
}
