import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
    const params = useParams()



  return (
    <div>
      <h1 className='capitalize whitespace-nowrap text-5xl font-bold absolute top-1/2 left-1/2 -translate-1/2 underline text-white'>
        {params.courseId} Details PAGE
      </h1>
    </div>
  )
}

export default CourseDetail
