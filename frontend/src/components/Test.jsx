import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const Test = () => {

  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState(null);

  const handleSubmit = async() => {
    console.log(Email + "\n" + password);

    
    await axios.post('http://localhost:8800/signup', {
      email : Email.toString(),
      password : password.toString()
    })
    .then(console.log("succes"))
    .catch(function (error) {
      console.log(error);
    });

    // await axios.get('http://localhost:8800/logout',
    // {
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //   },
    // })
    // .then((res) => {
    //   console.log(res);
    // })
    // .catch((err) => {
    //   console.log(err)
    // })
  }
  return (
    <div className='h-screen flex justify-center items-center bg-primary'>
      <div className='flex-col items-center h-1/2 w-1/4 p-10 rounded-lg bg-txt_large'>
              <input
                type="text"
                placeholder='example@gmail.com'
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)}
              />
          <button
            type='submit'
            onClick={handleSubmit}
            className='h-8 w-16 rounded-lg bg-green-400 font-bold'
          > Login </button>

      </div>
    </div>
  )
}

export default Test