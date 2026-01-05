import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

// react ka main kaam ui banana, data insert krna (sidestack)

const App = () => {

  const [counter, setCounter] = useState(0)

  // useEffect(function(){
  //   console.log('useEffect is running...');
  // })  // koi bhi change hoga useEffect chalega


  const[title, setTitle] = useState('')

  // useEffect(function(){
  //   console.log('useEffect is running');
  //   // jb bhi ui render karenga useeffect chalega
  // })


  // useEffect(function(){
  //   console.log('ek baar');
  // }, []) // dependencies dedi ab bs ek baar chalega uske baad changes karoge koi change nhi hoga


  // useEffect(function(){
  //   console.log('counter baar');
  // }, [counter]) // dependencies mein ab hmne counter de diya ab bs jb counter change hoga tb chalega baar baar nhi


  // useEffect(function(){
  //   console.log('counter baar');
  // }, [counter, title]) // ek saath do dependencies bhi de skte hai 


  const [num, setNum] = useState(0)
  const [user, setUser] = useState('')


  const getData = async () => {
    const response = await axios.get('https://randomuser.me/api/')
    setUser((response.data.results[0].name.first) + " " + (response.data.results[0].name.last));
  }

  useEffect(function() {
    getData()
  }, [num])



  return (
    <div>
      {/* <h1>{counter}</h1>
      <button onClick={() => {
        setCounter(counter+1);
      }}>Increase</button>
      <br />
      <br />

      <h1>What is your Name</h1>
      <input placeholder='Enter Name' type="text" value={title} onChange={ (e) => {
        setTitle(e.target.value)
      }} /> */}

      <h2>{user}</h2>
      <h1>{num}</h1>
      <button onClick={() => {
        setNum(num+1)
      }}>Click Here</button>

    </div>
  )
}

export default App
