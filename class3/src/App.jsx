import React from 'react'
import Card from './components/Card'
import Button from './components/Button'

const App = () => {

  const age = 21
  const user = 'sorv'
  let arr = [10, 20, 30]


  // const users = ['Abhinav', 'sourav', 'Akash', 'Sumit']

  return (
    <div className='w-full h-screen bg-black p-4'>
      {/* <h2 className='text-5xl bg-amber-800 text-amber-50'>
       {arr[0]},{user},{age}</h2> */}

       {/* agr hme defined variables ko use krna hai toh hme {} use krne padenga*/}

      {/* <div className='w-full text-amber-50'>{arr.map(el => {
        return <h1>rs {el}</h1>
       })}</div> */}

      
      {/* <Card />  // this is card */}
      {/* {Card(20, 30, 'sorv')} // wha bhi function ki trah recieve krna padega const Card = (a, b, c) */} 

      {/* {Card('sorv')} */}
      <Card user='sorv' age = {21}/>
      <Card user='Anay' age = {16}/>
      <Card user='Vasu' age = {20}/>

      <Button text = 'Buy Now'/>
      <Button text = 'Explore More'/>

      {/* <div className='p-3 h-screen '>
        {users.map(function(el, idx){
          return <Card key = {idx} user={el
            
          }/>
        })}
      </div> */}
    </div>
  )
}

export default App



// filter filteration ke kaam aata hai 
// map saare elements ko transform krne ke kaam aata hai