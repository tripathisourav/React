import React from 'react'

const Card = (props) => {

    console.log(props);   //{user: 'sorv', age: '21'}

  return (
    <div className='text-xl text-black bg-white m-2 mb-4 px-5 py-3 w-fit rounded-lg'>

      {/* <h1 className='text-xl text-white'>{c} has {a+b} rs</h1>  */}
      {/* output -> sorv has 50 rs */}

        {/* <h1 className='text-2xl text-black font-semibold'>{nm}</h1> */}
        
        
        {/* <h1 className='text-2xl text-black font-semibold'>{nm}</h1> */}
        {/* <h1 className='text-2xl text-black font-semibold'>{props.user}</h1>
        <p className='text-lg text-gray-700'>{props.age}</p> */}
        {/* direct props nhi likh skte error aa jayega you can't print  */}


        
        
      </div>
  )
}

export default Card
