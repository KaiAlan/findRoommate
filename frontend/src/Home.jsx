import React from 'react'
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

// asset import
import {
  mic,
  search,
  Polygon1,
  Polygon2,
  side,
  Room,
  Roommate
} from './assets';

import Navbar from './components/Navbar';


const Home = () => {
  return (
    <div className='bg-primary h-screen relative'>

      {/* side R sahpe design */}
      <img
        src={side}
        alt="side panle"
        className='h-full absolute right-0'
      />

      <Navbar />

      {/* landind section */}
      <div>
        <div className=''>
          <div className='h-40'>
            <div className='w-3/5 line-clamp-2 mx-24 my-20  font-bold text-txt_large text-8xl'>

              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString('Your Ideal Roommate is')
                    .pauseFor(1500)
                    .typeString(' Just a Click Away...')
                    .pauseFor(1500)
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>

          {/* <p className='w-3/5 line-clamp-2 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 mx-24 my-20  font-bold text-txt_large text-8xl '>Your Ideal Roommate is Just a Click Away...</p> */}


          <div className='mx-24 my-20 w-2/5 h-16 bg-white shadow-lg rounded-full relative'>
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

        {/* triangular buttons for easy search */}

        <div className='flex mx-24 mt-36 relative'>
          <div className='w-1/5 absolute z-10'>
            <img
              src={Polygon1}
              alt="roommate logo"
            />
            <img
              src={Roommate}
              alt="roommate logo"
              className='absolute bottom-5'
            />
          </div>
          <div className='w-1/5 absolute left-48 hover:scale-125' >
            <img
              src={Polygon2}
              alt="roommate logo"
            />
            <img
              src={Room}
              alt="roommate logo"
              className='w-3/5 absolute left-16 top-0'
            />
          </div>
        </div>
      </div>



      <div></div>
    </div>
  )
}

export default Home