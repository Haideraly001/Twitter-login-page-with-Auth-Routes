import React, { useState } from 'react';
import Navbar from "./Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

  const navigation = useNavigate()

  const handleSignup = () => {
    navigation('/sign-Up')
  }

  const [value, setValue] = useState({
    email: '',
    password: '',
  });
  const [update, setUpdate] = useState(false)

  const handleEmailStatus = (e) => {
    setValue({ ...value, email: e.target.value })
  }

  const handlePasswordStatus = (e) => {
    setValue({ ...value, password: e.target.value })
  }


  const userUpdate = () => {
    setUpdate(true)
    console.log(value);
    setTimeout(() => {
      navigation("/")
    }, 3000)


  }

  return (
    <div>

      <Navbar />
      <div className="flex  items-center justify-center max-h-screen py-6 bg-gray-500">
        <div className="bg-white py-4 px-8 rounded-lg shadow-md max-w-sm w-full text-center">
          <FontAwesomeIcon icon={faTwitter} className="text-blue-500 text-4xl mb-2" />
          <h1 className="text-2xl font-semibold mb-4">Sign In to Twitter</h1>

          <button className="flex items-center justify-center w-full border rounded-full p-2 mb-3 hover:bg-gray-100">
            <FontAwesomeIcon icon={faGoogle} className="text-red-500 mr-2" />
            Sign in with Google
          </button>

          <button className="flex items-center justify-center w-full border rounded-full p-2 mb-1 hover:bg-gray-100">
            <FontAwesomeIcon icon={faApple} className="text-black mr-2" />
            Sign in with Apple
          </button>

          <div className="flex items-center my-2">
            <hr className="flex-grow border-gray-300" />
            <span className="px-3 text-gray-500">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <input
            type="text"
            value={value.email}
            onChange={handleEmailStatus}
            placeholder="Phone, email, or username"
            className="border rounded-md w-full p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />

          <input
            type="password"
            placeholder="Password"
            value={value.password}
            onChange={handlePasswordStatus}
            className="border rounded-md w-full p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />

          <button
            onClick={userUpdate}
            className="w-full bg-black text-white rounded-full p-2 mb-4 hover:bg-gray-800">

            Next
          </button>

          <button className="w-full text-blue-500 mb-4 hover:underline">
            Forgot Password?
          </button>

          <p className="text-gray-500">
            Don't have an account? <span className="text-blue-500 hover:underline cursor-pointer" onClick={handleSignup}>Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
