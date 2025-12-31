import React from 'react'

const Card = (props) => {
    console.log(props);
  
  
    return (
    <div key={props.idx} className='w-[20vw] flex flex-col items-center bg-white rounded-xl px-10 py-8'>
      <img className='rounded-full h-24 w-24 object-center object-cover' src={props.elem.img} alt="" />
      <h2 className='text-2xl text-black font-semibold mt-2'>{props.elem.name}</h2>
      <h5 className='text-lg text-blue-500 font-semibold my-2'>{props.elem.pos}</h5>
      <p className='text-sm font-medium text-[#5a5858] leading-tight w-full text-center'>{props.elem.des}</p>

      <button id = {props.idx} onClick={props.deleteHandler} className='px-4 py-2 rounded bg-red-600 text-white font-semibold text-xs cursor-pointer active:scale-95 mt-4'>Remove</button>
    </div>
  )
}

export default Card
