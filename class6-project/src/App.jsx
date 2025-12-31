import React from 'react'
import { useState } from 'react'
import Contact from './components/Contact'

const App = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phn, setPhn] = useState('')
  const [loc, setLoc] = useState('')

  const [allUsers, seAlltUsers] = useState([])




  function submitHandler(e) {
    e.preventDefault()

    seAlltUsers([...allUsers,
    {
      name,
      email,
      phn,
      loc
    }])

    // console.log(allUsers);


    setName('');
    setEmail('');
    setPhn('');
    setLoc('');
  }

  return (
    <div className='h-screen bg-[#02c0ff] width-full flex items-center justify-center'>


      <div className='w-[30%] mr-5  bg-white  rounded-xl py-7 px-5 flex flex-col items-center'>
        <h2 className='text-center text-2xl font-semibold mb-6 mt-2'>Contact Form</h2>

        <form className='px-6 py-2 flex-col' onSubmit={(e) => {
          submitHandler(e)
        }}>
          <input className='w-full   border-2 border-[#707070c6] rounded-xl   outline-0   focus:border-blue-400 mb-5 h-15 p-3'
            type="text"
            placeholder='Enter Your Name'
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }} />

          <input className='w-full   border-2 border-[#707070c6] rounded-xl   outline-0   focus:border-blue-400 mb-5 h-15 p-3' type="email" placeholder='Enter Your Email' required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }} />

          <input className='w-full   border-2 border-[#707070c6] rounded-xl   outline-0   focus:border-blue-400 mb-5 h-15 p-3' type="tel" placeholder='Enter Your Phone Number' required
            value={phn}
            onChange={(e) => {
              setPhn(e.target.value)
            }} />
          <input className='w-full   border-2 border-[#707070c6] rounded-xl   outline-0   focus:border-blue-400 mb-5 h-15 p-3' type="text" placeholder='Enter Your Location' required
            value={loc}
            onChange={(e) => {
              setLoc(e.target.value)
            }} />
          <button className='bg-[#02c0ff] text-white text-xl w-full rounded-3xl py-2 active:scale-97 '>Submit</button>
        </form>

      </div>
      <div className='w-[30%] flex flex-col p-1 justify-start h-125 overflow-auto no-scrollbar gap-3'>
        {allUsers.map((user, id) => {
          return <Contact key = {id}  nm = {user.name} em = {user.email} phn = {user.phn} loc = {user.loc}/>
        })}
      </div>
    </div>
  )
}

export default App
