import React from 'react'

const Nav = (props) => {
  return (
    <div style = {{backgroundColor:props.color}} className='flex justify-between px-4 py-2  text-white mb-2'>
      <h1 className='text-xl font-semibold'>{props.title}</h1>
      <div className='flex gap-5'>
        {props.links.map(function(el, id){
            return <h4 key = {id} className='text-sm'>{el}</h4>
        })}
      </div>
    </div>
  )
}

export default Nav
