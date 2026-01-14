import React, { useContext } from 'react'
import { userDataContext } from '../context/UserContext'

const Sections = (props) => {
    // console.log(props);

    const data = useContext(userDataContext)

    console.log(data)
    return (

        <div className='w-full bg-zinc-700 flex flex-wrap justify-center gap-5 p-10'>
            {/* <h1 className='text-xl'>All Sections</h1>
            {props.children[0]}
            {props.children[1]} */}

            {data.map((e, idx) => {
                return <div key={idx} className='w-64 bg-cyan-800 px-4 py-2'>
                    <div className='flex justify-between py-2 border-b'>
                        <h3>user Id: {e.userId}</h3>
                        <h1>{e.name}</h1>
                    </div>

                    <h2 className='text-center text-2xl font-semibold my-4'>Posts</h2>
                    <div className='flex flex-col gap-3'>
                        {e.posts.map((e, idx) => {
                            return <div key={idx} className='w-full bg-amber-700 px-2 py-1'>
                                <h4>#Post {idx} - ({e.title})</h4>
                                <h2 className='text-xl mb-1'>
                                    <i>
                                        {e.content}
                                    </i>
                                </h2>
                                <div className='flex justify-between'>
                                    <div className='flex gap-1'>
                                        <i className="ri-thumb-up-fill text-[#a8a7a7] text-xl"></i>
                                        {e.likes}
                                    </div>
                                    <div className='flex gap-1'>
                                        <i className="ri-chat-1-fill text-[#969696] "></i>
                                        {e.comments}
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            })}

        </div>
    )
}

export default Sections
