import React from 'react'
import { Outlet } from 'react-router-dom'

const Courses = () => {
  return (
    <div className='sale-on'>
      {/* <h1>Courses Page</h1> */}

      <div className="sale">
        <p>Sale is live</p>
        <p>Sale is live</p>
        <p>Sale is live</p>
        <p>Sale is live</p>
        <p>Sale is live</p>
        <p>Sale is live</p>
        <p>Sale is live</p>



        {/* loop */}

        <p>Sale is live</p>
        <p>Sale is live</p>
        <p>Sale is live</p>
        <p>Sale is live</p>
        <p>Sale is live</p>
        <p>Sale is live</p>
        <p>Sale is live</p>
      </div>

      <Outlet />
    </div>
  )
}

export default Courses
