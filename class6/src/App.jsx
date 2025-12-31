import React from 'react'
import { useState } from 'react';

const App = () => {


  const [username, setUsername] = useState('');

  const [allUsers, setAllUsers] = useState([])



  const submitHandler = (e) => {
    e.preventDefault();

    // console.log(username);



    // const newAllUsers = [...allUsers]
    // newAllUsers.push(username)

    // console.log(newAllUsers)


    // setAllUsers(newAllUsers)


    setAllUsers([...allUsers,username]);

    setUsername('')
  }


  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" 
          placeholder='Enter Name'
          required // bina likhe kuch bhi dba doge warning aa jayegi

          // onChange={(e) => {
          //   // console.log('changing...');
          //   // console.log(e) // SyntheticBaseEvent
          //   // console.log(e.target)
          //   console.log(e.target.value)
          // }}
          // value={'sorv'}  //value input form mein likhi reh jayegi

          value = {username}
          onChange={(e)=>{
            console.log(e.target.value);
            
            setUsername(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>

      
      {allUsers.map((el) => { return <h1>{el}</h1>})}
      
    </div>
  )
}

export default App


// make a contact list