import React from 'react'
import profile from '../assets/profile.png'
import {FaStar} from 'react-icons/fa'

const Card = () => {

  return (
    <div className='h-1/2 w-1/4 flex justify-center items-center bg-primary'>
        <div className='h-full w-full bg-review_box rounded-3xl relative flex flex-col'>
            <div className='flex flex-row pt-3 pl-4 items-center'>
                <img src={profile}
                alt="logo"
                className='w-16 h-16 rounded-full'
                />
                <p className='pl-2 text-white'>Jessie Pinkman</p>
            </div>
            <div className='text-white absolute top-2 left-2'>
              
            </div>
            <div className='flex flex-col p-6 h-2/3 bg-white rounded-3xl absolute bottom-0 '>
                <div className= 'flex absolute top-0 start-0 p-2 pl-4'>
                  <div className='flex gap-1'>
                    <FaStar size={25} />
                    <FaStar size={25}/>
                    <FaStar size={25}/>
                    <FaStar size={25}/>
                    <FaStar size={25}/>
                  </div>
                </div>
                
                <p className='text-txt_large text-lg leading-tight pt-6' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore optio expedita enim hic facilis voluptatibus magni minus nesciunt praesentium ullam! </p>
            </div>
        </div>
    </div>
  )
}


export default Card