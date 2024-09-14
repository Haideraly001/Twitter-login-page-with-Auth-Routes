import React, { useState } from 'react'

const Bgcolor = () => {

  const [data, setData] = useState("#fffff")

  const handlerColorbg = () => {
    const randomColor = `#${(Math.floor(Math.random() * 1000000))}`
    console.log(randomColor)
    setData(randomColor)
  }


  return (
    <div className='max-w-fullw-full flex justify-center items-center h-screen ' style={{ background: data }} >
      <div className='max-w-md p-12 bg-white rounded-lg text-center'>
        <h1 className='text-current text-3xl text-center'>Bg color changer</h1>
        <button className='border border-blue-950 rounded-xl bg-lime-900 text-white mt-10 text-center w-24 p-1' onClick={handlerColorbg}>Click me</button>
      </div>
    </div>
  )
}

export default Bgcolor
