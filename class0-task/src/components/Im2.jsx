// import React from 'react'
import im21 from "../im21.png"
import im22 from "../im22.png"

const Im2 = () => {
  return (
    <div id='last'>
      <div id="frs" className="lt">
        <div id="context">
            <button>Services</button>
            <h2>Explore our full range of coaching, training, and tennis experiences, From first serve to match point - we've got you covered.</h2>
        </div>
        <button id="lstbtn">Explore More<i class="ri-arrow-right-up-fill"></i></button>
      </div>
      <div id="sec" className="lt">
        <img src={im21} alt="" />
      </div>
      <div id="thr" className="lt">
        <img src={im22} alt="" />
      </div>
    </div>
  )
}

export default Im2
