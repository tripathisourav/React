import React from 'react'

const Button = (props) => {
  return (
    <div className='bg-emerald-500 w-fit m-2 mb-4 px-5 py-2 rounded-lg text-xl text-amber-50'>
      {props.text}
    </div>
  )
}

export default Button
