import React from 'react'
import {useState} from 'react'
import {FaStar} from 'react-icons/fa'


const Rating = () => {
    const [rating, setRating] =  useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div className='flex'>
            {[...Array(5)].map((_, index) => {
                const currentRating = index + 1;
                return (
                    <label key={currentRating}>
                        <input
                            type="radio"
                            name="rating"
                            value={currentRating}
                            className='hidden'
                            onClick={() => setRating(currentRating)}
                        />
                        <FaStar className="cursor-pointer" 
                        size={30} 
                        color = {currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                        onMouseEnter={() => setHover(currentRating)}
                        onMouseLeave={() => setHover(null)}/>
                        </label>
                );
            })}
        </div>
    )
}

export default Rating