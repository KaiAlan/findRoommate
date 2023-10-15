import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center mx-10'>
            <div className=''>
                <img src={logo}
                alt="logo"
                className='w-1/4'
                />
            </div>
            <div className='flex justify-center items-center'>
                <div>
                    <p className="m-8 w-16 flex justify-center relative group">
                        <span className='text-unclicked_home text-xl font-semibold hover:text-clicked_home'>Home</span>
                        <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-clicked_home group-hover:w-full group-hover:transition-all"></span>
                    </p>
                </div>
                <div>
                    <p className="m-8 w-28 flex justify-center relative group">
                        <span className='text-unclicked_home text-xl font-semibold hover:text-clicked_home'>Contact Us</span>
                        <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-clicked_home group-hover:w-full group-hover:transition-all"></span>
                    </p>
                </div>
                <div>
                    <p className="m-8 w-16 flex justify-center relative group">
                        <span className='text-unclicked_home text-xl font-semibold hover:text-clicked_home'>About</span>
                        <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-clicked_home group-hover:w-full group-hover:transition-all"></span>
                    </p>
                </div>
                <div >
                    <Link
                        to="/login"
                        className='flex justify-center items-center p-6'
                    >
                        <button type="button" className="font-bold text-white bg-secondary hover:bg-secondary focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar