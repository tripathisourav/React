import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <div className='h-[9vh] flex justify-between px-6'>
            <Link to='/' className='flex items-center gap-1 text-black font-bold'>
                <img src={logo} alt="" className='h-6 w-6' />
                {/* <h1 className='text-xl'>Myna UI</h1> */}
                <h1 className='text-xl'>Myna UI</h1>
            </Link>

            <div className='flex gap-5 items-center text-[12px] font-bold'>
                <Link to='/features'><h5>Features</h5></Link>
                <Link to='/communities'><h5>Communities</h5></Link>
                <Link to='/events'><h5>Events</h5></Link>
                <Link to='/about'><h5>About Us</h5></Link>
                <Link to='/login'><h5>Login</h5></Link>

                <Link to='/join' className='bg-black text-white rounded-4xl font-medium px-2 py-0.5'>
                    Join for Free <i class='ri-arrow-right-line'></i>
                </Link>

            </div>
        </div>
    )
}

export default Navbar
