import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  // const getData = async () => {
  //   let response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
  //   console.log(response);
  //   console.log(response.data);
  //   // response is an promise
  // }


  const [allData, setAllData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')

    // console.log(response.data); 
    setAllData(response.data);
  }



  useEffect( () => {
    getData()
  }, [] )  // [] dependencies

  return (
    <div>
      {/* <button onClick={getData}>Get Data</button> */}

      {allData.map(function(el, idx){
          return <h1 key={idx}>{idx} {el.name}</h1>
      })}

    </div>
  )
}

export default App

