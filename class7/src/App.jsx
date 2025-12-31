import React from 'react'
import { useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [name, setName] = useState('')
  const [img, setImg] = useState('')
  const [pos, setPos] = useState('')
  const [des, setDes] = useState('')
  const [allUsers, setAllUsers] = useState([])


  const submitHandler = (e) => {
    e.preventDefault()

    setAllUsers([...allUsers, { name, img, pos, des }])
    console.log(allUsers);


    // console.log('form submitted');
    console.log(name, img, pos, des);

    setName('')
    setImg('')
    setPos('')
    setDes('')
  }

  const deleteHandler = (e) => {
    // console.log('delete kr');
    // console.log(e.target.id);
    const copyUsers = [...allUsers]
    copyUsers.splice(e.target.id, 1)
    setAllUsers(copyUsers)
  }

  return (
    <div className='h-screen w-full bg-black text-white' >

      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex flex-wrap justify-center pt-6'
      >

        <input value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
          className='rounded w-[45%] text-xl font-semibold border-2 m-2 px-5 py-2 '
          type="text"
          placeholder='Enter Your Name' />


        <input value={img}
          onChange={(e) => {
            setImg(e.target.value)
          }}
          className='rounded w-[45%] text-xl font-semibold border-2 m-2 px-5 py-2 '
          type="text"
          placeholder='Image URL' />

        <input value={pos}
          onChange={(e) => {
            setPos(e.target.value)
          }}
          className='rounded w-[45%] text-xl font-semibold border-2 m-2 px-5 py-2 '
          type="text"
          placeholder='Enter Position' />

        <input value={des}
          onChange={(e) => {
            setDes(e.target.value)
          }}
          className='rounded w-[45%] text-xl font-semibold border-2 m-2 px-5 py-2 '
          type="text"
          placeholder='Enter Description' />


        <button className='rounded w-[45%] text-xl font-semibold border-2 m-2 px-5 py-2 bg-emerald-600 active:scale-95'>Create User</button>
      </form>


      <div className='px-10 py-10 flex flex-wrap gap-6 w-full '>

        

        {allUsers.map((e, id) => {
          // console.log(e);
          
          return <Card idx = {id} elem = {e} deleteHandler = {deleteHandler}/>
    
          // <div key={id} className='w-[20vw] flex flex-col items-center bg-white rounded-xl px-10 py-8'>
          //   <img className='rounded-full h-24 w-24 object-center object-cover' src={e.img} alt="" />
          //   <h2 className='text-2xl text-black font-semibold mt-2'>{e.name}</h2>
          //   <h5 className='text-lg text-blue-500 font-semibold my-2'>{e.pos}</h5>
          //   <p className='text-sm font-medium text-[#5a5858] leading-tight w-full px-6 '>{e.des}</p>
          //   <button id={id} onClick={(e) => {
          //     deleteHandler(e)
          //   }} className='px-4 py-2 rounded bg-red-600 text-white font-semibold text-xs cursor-pointer active:scale-95 mt-4'>Remove</button>
          // </div>
        })}
      </div>

    </div>
  )
}

export default App
