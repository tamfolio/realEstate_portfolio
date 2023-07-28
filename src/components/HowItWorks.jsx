import React from 'react'

function HowItWorks() {
  return (
    <div className='w-[100%] h-[100vh] bg-[#fff] flex flex-col items-center justify-center'>
      <h1 className='text-[40px] font-manrope font-semibold text-[#000] mb-[70px]'>How it works?</h1>
      <div className='flex items-center justify-center gap-[160px] relative'>
        <div className='w-[260px] h-[263px] flex flex-col items-center justify-center relative'>
            <img src="/assets/hiw1.svg" alt="" className='absolute top-0'/>
            <h3 className='mt-[80px] text-center font-manrope font-semibold text-[22px]'>Research Suburbs</h3>
            <p className='text-center text-[16px] mt-[15px]'>Wonder twenty hunted and put income set desire expect. Am cottage calling.</p>
        </div>
        <div className='w-[260px] h-[263px] flex flex-col items-center justify-center relative'>
            <img src="/assets/hiw2.svg" alt="" className='absolute top-0'/>
            <h3 className='mt-[80px] text-center font-manrope font-semibold text-[22px]'>Instant Valuation</h3>
            <p className='text-center text-[16px] mt-[15px]'>Conveying or northward offending admitting perfectly my. Colonel gravit and moonlight.</p>
        </div>
        <div className='w-[260px] h-[263px] flex flex-col items-center justify-center relative'>
            <img src="/assets/hiw3.svg" alt="" className='absolute top-0'/>
            <h3 className='mt-[80px] text-center font-manrope font-semibold text-[22px]'>Track Property</h3>
            <p className='text-center text-[16px] mt-[15px]'>Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible.</p>
        </div>
        <img src="/assets/left.png" alt="" className='absolute left-[20%] top-[15%]'/>
        <img src="/assets/right.png" alt="" className='absolute right-[20%] top-[15%]'/>
      </div>
    </div>
  )
}

export default HowItWorks
