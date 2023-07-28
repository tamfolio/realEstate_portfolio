import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroDetails from '../HeroDetails'

const Hero = () => {
  return (
    <div className='w-[100%] h-[100vh] bg-[#fff] reltive flex flex-col pb-[30px]'>
        <span className='absolute w-[511px] h-[100vh] bg-[#BDCCFF] right-0 top-0 z-10'></span>
      <Navbar className='z-2'/>
      <HeroDetails/>
    </div>
  )
}

export default Hero
