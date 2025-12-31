import React from 'react'

const Contact = (props) => {
  return (
    <div className='w-full rounded-xl bg-white flex flex-col p-5 ' key={props.id}>
        <div className='flex items-center mb-5'>
            <div className='bg-[#02c0ff] text-white rounded-4xl mr-5 h-15 w-15 text-5xl flex items-start justify-center'>{props.nm[0]}</div>
            {/* px-2 py-2  */}
            <div className='flex flex-col'>
                <h4 className='text-4xl font-semibold'>{props.nm}</h4>
                <p className='text-base text-black'>{props.em}</p>
            </div>
        </div>
        <div className='flex justify-between items-center'>
            <h3><i className="ri-phone-fill  text-[#df0404] text-2xl font-bold mr-2.5"></i>{props.phn}</h3>
            <h4><i className="ri-map-pin-line mr-1.5 text-[#04df3b] text-[1.3rem] font-semibold mr"></i>{props.loc}</h4>
        </div>
    </div>
  )
}

export default Contact
