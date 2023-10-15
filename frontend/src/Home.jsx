import React from 'react'
import {Link} from 'react-router-dom';


const Home = () => {
  return (
    <div className='bg-primary h-screen'>
      <div className='flex justify-end items-end'>
      <Link
      to="/login"
      >
<button type="button" className="text-white bg-secondary hover:bg-secondary focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
      </Link>
      </div>
    </div>
  )
}

export default Home