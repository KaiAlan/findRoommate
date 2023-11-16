// Signup.js

import React, { useState } from "react";

// const Signup = ({ toggleForm, handleSignup }) => {
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); 
  
  return (
    <form
      action=""
      className="h-full w-full flex flex-col justify-center items-center gap-6"
    >
      <input
        type="text"
        name="email"
        placeholder="Enter your email"
        className="w-full border-b-2 border-gray-300 outline-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Create a Password"
        className="w-full border-b-2 border-gray-300 outline-none"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        className="w-full border-b-2 border-gray-300 outline-none"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)} // Handle input changes for confirm password
      />
      <button
        type="submit"
        name="signup"
        className="w-1/2 py-1 rounded-full text-white bg-[#3ec8e0]"
        // onClick={handleSignup}
      >
        Signup
      </button>
    </form>
  );
};

export default Signup;
