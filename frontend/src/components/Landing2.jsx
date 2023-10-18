import React from 'react'

// assets import
import map2 from '../assets/map2.png';
import path_map from '../assets/path_map.png';
import Group1 from '../assets/Group1.png';

const Landing2 = () => {
    return (
        <div className='h-screen bg-gradient-to-b from-above_map to-primary relative'>
            <img
                src={map2}
                alt="map"
                className='h-190 w-2/3 shadow-xl transition ease-in-out rounded-map absolute right-0 bottom-0'
            />
            <div>
                <img
                    src={path_map}
                    alt="path_map"
                    className='w-1/3 absolute right-120 top-12'
                />
                <p className='w-1/2 break-words font-bold font-Gill_Sans_MT text-txt_large text-7rem absolute right-10 top-10'>WE ARE AVAILABLE IN</p>
            </div>
            <div className='h-screen'>
                <img
                    src={Group1}
                    alt="group1_man"
                    className='h-3/5 absolute bottom-108 left-14'
                />
            </div>
        </div>
    )
}

export default Landing2