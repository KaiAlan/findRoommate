import React, {useState} from 'react'
// import { Link } from 'react-router-dom';

// asset import
import {
  mic,
  search,
  Polygon1,
  Polygon2,
  side,
  Room,
  Roommate,
  testimonials, 
  path_testimonials
} from './assets';

import Navbar from './components/Navbar';
import Landing2 from './components/Landing2';
import Card from './components/Card';

import Modal from './components/Modal';

const Home = () => {

  const [showMyModal, setShowMyModal] = useState(false);
    
    const handleOnClose = () => setShowMyModal(false); 
  
  return (
    <div>
      <div className='bg-primary h-screen relative'>

        {/* side R sahpe design */}
        <img
          src={side}
          alt="side panle"
          className='h-full absolute right-0'
        />

        <Navbar setModal={setShowMyModal}/>

        {/* landind section 1 */}
        <div>
          <div>
            <div className='h-40'>
              <p className='w-3/5 mx-24 mt-20  font-bold font-Gill_Sans_MT text-txt_large text-8xl '>Your Ideal Roommate is </p>
              <p className='w-3/5 line-clamp-2 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 mx-24 mb-20  font-bold font-Gill_Sans_MT text-txt_large text-8xl '>Just a Click Away...</p>
            </div>

            <div className='animate-slidein mx-24 my-20 w-2/5 h-16 bg-white shadow-lg rounded-full relative'>
              <img
                src={search}
                alt="search"
                className='h-14 bottom-1 absolute left-1'
              />
              <p className='animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-secondary text-3xl absolute bottom-4 left-20'>enter your postal code</p>
              <img
                src={mic}
                alt="mic"
                className='animate-animate_mic h-12 absolute bottom-2 right-10'
              />
            </div>
          </div>
          

          {/* triangular buttons for easy search */}

          <div className='flex mx-24 mt-36 relative'>
            <div className='w-1/5 absolute hover:-translate-x-12 hover:delay-150 hover:rotate-90 transition duration-300 ease-in'>
              <img
                src={Polygon1}
                alt="roommate logo"
              />
              <img
                src={Roommate}
                alt="roommate logo"
                className='absolute bottom-5 z-10'
              />
            </div>
            <div className='w-1/5 absolute left-48 hover:translate-x-12 hover:delay-150 hover:rotate-90 transition duration-300 ease-in' >
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
        
      </div>

      {/* Landing section 2 */}

      <Landing2 />

      {/* Landing section 3 */}
      
      <div className="h-screen w-screen bg-primary flex flex-col items-center">
        <div className="h-2/5 flex items-center relative">
          <img
              src={path_testimonials}
              alt="path_testimonials"
              className="h-1/2 absolute w-full"
            />
            <img
              src={testimonials}
              alt="testimonials"
              className="h-1/2 relative w-full"
            />
        </div>

        <div className="h-3/5 w-full flex flex-row justify-center gap-6 ">
          <Card />
          <Card />
          <Card />
          
        </div>
      </div>
      <Modal onClose={handleOnClose} visible={showMyModal}/>
    </div>
  )
}

export default Home