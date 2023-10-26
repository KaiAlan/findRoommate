import React from 'react'
import Login from './Login';

// eslint-disable-next-line react/prop-types
export default function Modal({visible, onClose}) {
    const handleOnClose = (e) => {
        if(e.target.id === "container")
            onClose();
    };

    if(!visible) return null;

  return (
    <div id="container" onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center'>
        <Login/>
    </div>
  )
}
