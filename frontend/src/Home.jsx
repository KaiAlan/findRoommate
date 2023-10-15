import React from 'react'
import {Link} from 'react-router-dom';

// asset import
import mic from './assets/mic.png';
import search from './assets/search.png';
import Polygon1 from './assets/Polygon1.png';
import Polygon2 from './assets/Polygon2.png';

import Navbar from './components/Navbar';


const Home = () => {
  return (
    <div className='bg-primary h-screen'>
        <Navbar />

        {/* landind section */}
        <div>
          <div className=''>
            <p className='mx-24 my-20 break-words font-bold text-txt_large text-8xl w-3/5'>Your Ideal Roommate is Just a Click Away...</p>
            <div className='mx-24 w-2/5 h-16 bg-white shadow-lg rounded-full relative'>
              <img
                src={search}
                alt="search"
                className='h-14 bottom-1 absolute left-1'
                />
                <p className='text-secondary text-3xl absolute bottom-4 left-20'>enter your postal code</p>
              <img
                src={mic}
                alt="mic"
                className='h-12 absolute bottom-2 right-10'
                />
            </div>
          </div>
          <div className='flex m-24 relative'>
            <img
              src={Polygon1}
              alt="roommate logo"
              className='w-1/5 absolute'
              />
              <img
              src={Polygon2}
              alt="roommate logo"
              className='w-1/5 absolute left-52'
              />
          </div>
        </div>



        <div></div>
    </div>
  )
}

export default Home