import React from 'react'
import Navbar from '../Navbar/Navbar'

const Hero = () => {
  return (
    <div className='w-[100%] h-[100vh] bg-[#fff] reltive flex flex-col'>
        <span className='absolute w-[511px] h-[100vh] bg-[#BDCCFF] right-0 top-0 z-1'></span>
      <Navbar className='z-2'/>
    </div>
  )
}

export default Hero
