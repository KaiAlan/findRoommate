import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Profile from './components/Profile';
import Login from './components/Login'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App