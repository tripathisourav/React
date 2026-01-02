import { useState } from 'react'

const App = () => {

  const [name, setName] = useState('')
  const [img, setImg] = useState('')
  const [pos, setPos] = useState('')
  const [des, setDes] = useState('')

  const localData = JSON.parse(localStorage.getItem('all-users')) || []
  const [allUsers, setAllUsers] = useState(localData)


  const submitHandler = (e) => {
    e.preventDefault()

    const oldUsers = [...allUsers]

    oldUsers.push({ name, img, pos, des })

    setAllUsers(oldUsers)

    localStorage.setItem('all-users', JSON.stringify(oldUsers));


    setName('')
    setImg('')
    setPos('')
    setDes('')
  }

  const deleteHandler = (e) => {
    const copyUsers = [...allUsers]

    const conf = confirm('do you really wanna delete this element?')
    
    if (conf) {
      copyUsers.splice(e.target.id, 1)
      alert('element deleted')
    } else {
      alert('element not deleted')
    }


    setAllUsers(copyUsers)
    localStorage.setItem('all-users', JSON.stringify(copyUsers))
  }

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row text-white bg-white">

      <div className='w-full  lg:w-[45%] lg:h-192.5 lg:pt-20  lg:m-7 '>
        <form onSubmit={(e) => {
          submitHandler(e)
        }} className='flex flex-wrap justify-center pt-6 '
        >

          <input value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
            className='w-full border text-[17px] text-[grey] font-semibold mx-7 m-2 px-5 py-2 border-black md:w-[45%] md:mx-2 '
            type="text"
            placeholder='Enter Your Name' />


          <input value={img}
            onChange={(e) => {
              setImg(e.target.value)
            }}
            className='w-full border text-[17px] text-[grey] font-semibold mx-7 m-2 px-5 py-2 border-black md:w-[45%] md:mx-2 '
            type="text"
            placeholder='Image URL' />

          <input value={pos}
            onChange={(e) => {
              setPos(e.target.value)
            }}
            className='w-full border text-[17px] text-[grey] font-semibold mx-7 m-2 px-5 py-2 border-black md:w-[45%] md:mx-2'
            type="text"
            placeholder='Enter Position' />
          <input value={des}
            onChange={(e) => {
              setDes(e.target.value)
            }}
            className='w-full border text-[17px] text-[grey] font-semibold mx-7 m-2 px-5 py-2 border-black md:w-[45%] md:mx-2'
            type="text"
            placeholder='Enter Description' />


          <button className='rounded w-[45%] text-xl font-semibold border-2 m-2 px-5 py-2 bg-[#2a5bef] active:scale-95'>Create User</button>
        </form>
      </div>


      <div className='scroll px-10 py-10 flex flex-wrap justify-center  shrink-0  gap-6  md:w-full lg:w-[55%] lg:h-screen lg:overflow-auto'>



        {allUsers.map((e, id) => {

          return <div className="w-[320px] h-87.5  flex flex-col items-center text-center bg-white rounded-xl px-6 py-8 border-2 border-[#989898]">
            <img className='rounded-full h-24 w-24 object-center object-cover' src={e.img} alt="" />
            <h2 className='text-2xl text-black font-semibold mt-2'>{e.name}</h2>
            <h5 className='text-lg text-blue-500 font-semibold my-2'>{e.pos}</h5>
            <p className='text-sm font-medium text-[#5a5858] leading-tight w-full px-6 '>{e.des}</p>
            <button id={id} onClick={(e) => {
              deleteHandler(e)
            }} className='px-4 py-2 rounded bg-red-600 text-white font-semibold text-xs cursor-pointer active:scale-95 mt-4'>Remove</button>
          </div>


        })}
      </div>

    </div>
  )
}

export default App
