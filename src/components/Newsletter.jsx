import React from 'react'

function Newsletter() {
  return (
    <div className='w-[100%] h-[70vh] bg-[#FBFCFC] flex flex-col items-center justify-center'>
        <h1 className='font-manrope text-[45px] font-bold text-[#31353B] mb-[11px]'>Get Our Newsletter</h1>
        <h4 className='font-manrope text-[23px] font-bold text-[#31353B]'>To join the worldwide community</h4>
        <div className='bg-[#fff] w-[686px] h-[124px] box-shadow flex items-center justify-between px-[30px] mt-[34px]'>
            <div>
                <h1 className='text-[#31353B] opacity[.2] text-[17px] font-semibold mb-[5px]'>Type your Email Address</h1>
                <input type="text" className='outline-none border-none' placeholder='Enter your email address' />
            </div>
            <button className='w-[167px] h-[72px] text-[#fff] bg-[#F85A47]'>Send Now</button>
        </div>
    </div>
  )
}

export default Newsletter
