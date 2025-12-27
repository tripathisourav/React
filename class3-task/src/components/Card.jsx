import React from 'react'

//  style={{ backgroundImage: `url(${bg})` }}

const Card = (props) => {

    console.log(props)
  return (
    <div>
      <div className='h-94 w-68 bg-white rounded-xl px-1.5 py-1'>
        <div className='w-full h-[35%] bg-amber-300 rounded-2xl relative  bg-center bg-cover'  style={{ backgroundImage: `url(${props.ci})` }}>
          <button className='absolute right-2 top-2 bg-[#EEEFF0] text-black rounded-2xl px-3 py-1 text-[12.5px]'>Follow<i class="ri-add-line"></i></button>
          <img className='w-23.5 h-23.5 absolute left-4 top-17 rounded-[50%] border-[3.5px] border-white '  src= {props.pi} alt="" />
        </div>

        <div className=' w-full h-[73%] flex flex-col justify-center'>
          <div>
            <h1 className='w-full px-3 text-[1.4rem] font-bold'>{props.fn}</h1>
            <p className='w-[95%] px-3 text-[0.9rem] font-normal'>{props.des}</p>
            <div className='flex px-8 py-2 rounded-2xl justify-between bg-[#F5F5F5] text-[#111] mt-4 mb-1'>
              <div className='flex flex-col'>
                <h3 className='text-[0.9rem] font-bold'>{props.like}</h3>
                <h6 className='text-[0.8rem] text-center'>Likes</h6>
              </div>

              <div>
                <h3 className='text-[0.9rem] font-bold'>{props.post}</h3>
                <h6 className='text-[0.8rem] text-center'>Posts</h6>
              </div>

              <div>
                <h3 className='text-[0.9rem] font-bold'>{props.view}</h3>
                <h6 className='text-[0.8rem] text-center'>Views</h6>
              </div>

            </div>
          </div>

          <div className='flex justify-between content-center pt-1.5 text-xl px-18 font-normal'>
            <i class="ri-instagram-line"></i>
            <i class="ri-linkedin-line"></i>
            <i class="ri-threads-line"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
