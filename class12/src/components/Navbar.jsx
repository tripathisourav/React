// import React from 'react'
// import { Link, NavLink } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div className='nav'>
//       {/* <Link to='/'>Home</Link>
//       <Link to='/about'>About</Link>
//       <Link to='/courses'>Courses</Link> */}

//       <Navlink to='/' style={(a) => {
//         style={({isActive}) =>({
//             color: isActive? 'red': 'white'
//         })}
//       }}>Home</Navlink>
//       <Navlink to='/about'>About</Navlink>
//       <Navlink to='/courses'>Courses</Navlink>

//       <NavLink
//     </div>
//   )
// }

// export default Navbar


import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? 'red' : 'white'
        })}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? 'red' : 'white'
        })}
      >
        About
      </NavLink>

      <NavLink
        to="/courses"
        style={({ isActive }) => ({
          color: isActive ? 'red' : 'white'
        })}
      >
        Courses
      </NavLink>
    </div>
  )
}

export default Navbar
