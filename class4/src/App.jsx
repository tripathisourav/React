import React from 'react'
import Nav from './components/Nav'
import Men from './components/Men'
import Woman from './components/Woman'

const App = () => {

//   const user1 = {
//      name: 'sorv',
//      age: 21,
//      gender:'male',
//   }

//   const user2 = {
//      name: 'Mike',
//      age: 8,
//      gender:'male',
//   }

//   const user3 = {
//      name: 'Sneha',
//      age: 19,
//      gender:'female',
//   }



  function btnClicked(val){
    console.log('Button Clicked', val);
  }

  return (
    <div className='h-screen w-full bg-black p-2'>
      {/* <Nav title = 'Sorv'  color = 'red' links = {['Home', 'Courses', 'Classroom', 'Contacts']}/>
      <Nav title = 'Joe'  color = 'blue' links = {['Home', 'Achievements', 'Next Fight', 'Gym']}/>
      <Nav title = 'Alex'  color = 'green' links = {['Gym', 'Prices', 'Timings', 'Contacts']}/> */}

      {/* {user2.gender == 'male' ? user2.age > 10 ? <Men /> : <Woman /> : <Woman />} */}

      <button 
        // onClick={btnClicked}

        onClick={function(){
          btnClicked(10)
        }}

        className='active:scale-95 bg-emerald-400 text-white px-7 py-4 rounded-xl text-xl font-bold m-2'>Click to Download</button>

    </div>
  )
}

export default App
