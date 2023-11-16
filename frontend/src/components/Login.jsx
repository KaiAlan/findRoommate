
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Signup from "./Signup"; 

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true); 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // const handleLogin = () => {
   
  // };

  const handlePasswordInput = () => {
    if (incorrectPassword) {
      setIncorrectPassword(false);
    }
  };

  // Function to toggle between login and signup forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };



  return (
   
      <div className="h-1/3 w-1/6 bg-gray-transparent rounded-3xl px-4 py-6  ">
        <div className="h-1/6">
          <div className="h-3/4 w-full bg-white rounded-full flex justify-center items-center border-2 border-gray-400">
            <button
              className={`${
                isLogin ? "bg-[#3ec8e0] text-white " : "bg-white text-[#3ec8e0]"
              } h-full w-2/3 rounded-full `}
              onClick={toggleForm}
            >
              Login
            </button>
            <button
              className={`${
                isLogin ? "bg-white text-[#3ec8e0] " : "bg-[#3ec8e0] text-white "
              } h-full w-2/3 rounded-full`}
              onClick={toggleForm}
            >
              Signup
            </button>
          </div>
        </div>

        <div className="h-5/6 ">
          <div className="h-full w-full bg-white rounded-3xl pt-8 px-4 pb-4 border-2 border-gray-400">
            {isLogin ? ( 
              <form action="" className="h-full w-full flex flex-col justify-center items-center gap-6">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full border-b-2 border-gray-300 outline-none"
                />
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="w-full border-b-2 border-gray-300 mb-4 outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={handlePasswordInput}
                  />
                  <span
                    className="absolute top-0 right-0 mt-2 mr-4 cursor-pointer text-gray-400"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                {incorrectPassword && (
                  <div className="text-red-500 text-sm text-right">
                    Incorrect password. Please try again.
                  </div>
                )}
                <button
                  type="submit"
                  name="login"
                  className={`w-1/2 py-1 rounded-full text-white ${
                    isLogin ? "bg-[#3ec8e0]" : "bg-[#4caf50]"
                  }`}
                  // onClick={handleLogin}
                >
                  Login
                </button>
                <a href="forgot_password">Forgot password?</a>
              </form>
            ) : (
              // <Signup toggleForm={toggleForm} handleSignup={handleSignup} />
              <Signup/>
            )}            
          </div>
        </div>
      </div>
    
  );
};

export default Login;
