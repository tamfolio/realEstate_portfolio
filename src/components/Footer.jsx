import React from 'react'

function Footer() {
  return (
    <div className='w-[100%] h-[30vh] bg-[#fff] px-[280px] flex flex-col items-center justify-center'>
      <div className='w-[100%] h-[1px] bg-[#DEDFE1] mb-[60px]'></div>
      <div className='w-[100%] flex items-center justify-between mb-[77px]'>
      <h1 className="text-[23px] text-[#31353B] font-extrabold font-manrope">SmartSpace</h1>
        <div className="flex items-center justify-center gap-[46px]">
       <p className="text-[13px] font-bold text-[#000] font-dmsans">Home</p>
       <p className="text-[13px] font-bold text-[#000] font-dmsans">About</p>
       <p className="text-[13px] font-bold text-[#000] font-dmsans">Service</p>
       <p className="text-[13px] font-bold text-[#000] font-dmsans">Portfolio</p>
       <p className="text-[13px] font-bold text-[#000] font-dmsans">Blog</p>
       <p className="text-[13px] font-bold text-[#000] font-dmsans ">Contact</p>
      </div>
      </div>
      <span className='pb-[20px] text-[12px] font-bold font-dmsans text-[#31353B]'>Copyright © 2023 TamFolio . All Rights Reseved.</span>
    </div>
  )
}

export default Footer
