import React, { useState } from 'react'
import Man from './components/Man';
import Women from './components/Women';

const App = () => {

  // const [gender, setGender] = useState('Male')


  // function changeGender() {
  //   if (gender === 'Male')
  //     setGender('Female');
  //   else
  //     setGender('Male');
  // }



  // let[marks, setMarks] = useState([88, 76, 19, 67, 28])

  // function graceStudent(){
  //   marks = marks.map(function(el){
  //     return el+5;
  //   })
  //   // console.log(marks);
  //   setMarks(marks) 
  // }

  // function graceStudent(){
  //   const newMarks = marks.map(function(el){
  //     if(el<95) return el+5;
  //     else return el;
  //   })

  //   // console.log(newMarks);
  //   setMarks(newMarks)
  // }




  // const arr = ['sarthak', 'harsh', 'ajay', 'ankit', 'sorv']

  // const[idx, setIdx] = useState(0)


  // useState

  // const[num, setNum] = useState(0)




  // read only - write only
  // const [king, setKing] = useState('sorv')  // king is read only setking is write only
  // const [queen, setQueen] = useState('sneha')

  // const changeKing = () =>{
  //   // console.log(king); //sorv
  //   king == 'sorv' ? setKing('Tripathi'):setKing('sorv');
  //   // console.log(king); //sorv
  //   // cause it's a asynchronous function it remains in pending state for some time console.log pehle chl jaata hai
  // }
  // // console.log(king); //Tripathi
  // const changeQueen = () =>{
  //   queen == 'sneha' ? setQueen('Shreya'):setQueen('sneha');
  // }




  // let a = 0

  // // yha pr a++ hone ke baad bhi value badh nhi rhi kyuki beech mein react hai state woh hi manage krega 
  // const btnClicked = () =>{
  //   a++;
  //   console.log('btn is clicked', a);
  // }




  return (

    <div className='parent'>
      {/* <h1>{a}</h1> */}
      {/* <button onClick={()=>{
        // console.log(a);
        a++;
       }}>click</button> */}

      {/* <button onClick={btnClicked()}>click</button>  */}
      {/* agar double brackets lagayenga toh function hamesha hi chl jayega agar sirf button click par hi chlana ho toh () mt lagao */}


      {/* <h1>{king} X {queen}</h1>
       <button onClick={changeKing}>change King</button> 
       <button onClick={changeQueen}>change Queen</button>  */}


      {/* <h1>{num}</h1>
        <button onClick={() => {
          setNum(num+10)
        }}>Increase</button>
      
        <button onClick={() => {
          setNum(num-10)
        }}>Decrease</button> */}




      {/* <div className='box'>
          {num}
        </div>
        <button onClick={() => {
            setNum(Math.floor(Math.random()*100))
        }}>Click Here</button> */}


      {/* <h1>{arr[idx]}</h1>

        <button onClick={() => {
          // setIdx(idx++) error idx++ -> idx ki value badha do or idx keandar hi store kr do num+1 num ki ek value badha do storage ka kuch nhi btaya
          setIdx(Math.floor(Math.random()*arr.length))
          // arr[setIdx]
        }}>Change</button> */}


      {/* {marks.map(function(e, idx){
        return <h1 key={idx}>Student {idx+1} = {e} ({e>=33?'Pass':'Fail'})</h1>
      })}

        <button onClick={graceStudent}>give Grace</button> */}





      {/* <div className='rd'>
          <input type="radio" name='gender' id='male'/>
          <label htmlFor="male">Male</label>
        </div>

        <div className='rd'>
          <input type="radio" name='gender' id='female'/>
          <label htmlFor="female">Female</label>
        </div> */}


      {/* <h1>{gender}</h1>
      <button onClick={changeGender}>Change</button>


      {gender == 'Male' ? <Man /> : <Women />} */}


    </div>
  )
}

export default App
