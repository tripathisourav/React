import React from 'react'
import { useParams } from 'react-router-dom'

const AnyCourse = () => {

    const params = useParams()
    // console.log(params); 
    // ab jb bhi AnyCourse khulega toh link ke aange jo bhi likha hoga woh aa jayega
    // <Route path='/courses/:courseId' element={<AnyCourse />} />
    // http://localhost:5173/courses/cohort2  // courseId: "cohort2"


    console.log(params.courseId);  // Route path='/courses/:courseId' element={<AnyCourse />} /> kodex
    

  return (
    <div>
      <h1 className='capitalize whitespace-nowrap text-5xl font-bold absolute top-1/2 left-1/2 -translate-1/2 underline text-white'>
        {params.courseId} Course PAGE
      </h1>
    </div>
  )
}

export default AnyCourse
