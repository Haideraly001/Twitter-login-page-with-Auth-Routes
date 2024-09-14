import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from "./component/Navbar"

const Home = () => {

  const navigation = useNavigate();

  const handlesignin = () => {
    navigation('/sign-In')
  }

  return (
    <div>
      <Navbar />
      <div className="w-full mt-14 ml-12 text-2xl">
        <button onClick={handlesignin} className="border min-w-fit px-6 pb-1 mx-auto rounded-md">Sign In</button>
      </div>
    </div>
  )
}

export default Home
