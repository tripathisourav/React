import React from 'react'
import Card from './components/Card'

const App = () => {

  const cardData = {
    username: 'Sourav',
    role: 'Engineer',
    email: 'sorv@gmail.com',
    profile: 'https://images.unsplash.com/photo-1764593008195-87ca871d72bd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D'
  }
  return (
    // error
    // <div>
    // </div>
    // <h2>
    // </h2>


    // fragments -> we don't give any attribute in fragment
    // <>
    //   <h1>Hello guys</h1>
    //   <h2>Kaise ho aap log</h2>
    // </>

    <>
      <Card cardData = {cardData} />
    </>
  )
}

export default App
