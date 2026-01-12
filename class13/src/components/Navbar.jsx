
import React, { useState } from 'react'




const Navbar = (props) => {
  
  const [newTheme, setNewTheme] = useState('')

  return (
    <div className='nav'>
      {/* <h1>Theme is {props.theme}</h1> */}
      {/* <button onClick={() => {
        props.setTheme('dark')  // neeche se upar data chla gya light theme dark ho gyi
      }}>Change Theme</button> */}


      <form onSubmit={(e) => {
        e.preventDefault()
        console.log(newTheme);

        props.changeTheme(newTheme)
        setNewTheme('')
      }}>
        <input
          value={newTheme}
          onChange={(e) => {
            setNewTheme(e.target.value)
          }}
          type="text"
          placeholder='Enter Theme' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Navbar
