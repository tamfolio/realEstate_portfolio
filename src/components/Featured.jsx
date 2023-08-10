import React from 'react'

function Featured() {
  return (
    <div className='w-[100%] h-[120vh] bg-[#fff] flex flex-col items-center justify-center px-[135px]'>
        <h1 className='text-[40px] font-manrope font-semibold mb-[95px]'>Featured Listing of the Week</h1>
        <div className='w-[100%] h-[650px] bg-[#F1FFFF] flex items-center justify-center gap-[77px]'>
            <div className='flex flex-col relative items-start justify-start mb-[100px]'>
                <img src="/assets/Image (3).png" alt="absolute" />
                <img src="/assets/Image (4).png" alt="" className='absolute top-[60%]' />
            </div>
            <div className='flex flex-col w-[420px]'>
                <h1 className='text-[31px] font-manrope font-semibold mb-[28px] w-[378px]'>The and collecting for the motionless difficulty son.</h1>
                <p className='text-[16px] font-manrope w-[344px] mb-[42px]'>Conveying or northward offending admitting perfectly my. Colonel gravity get thought fat smiling add but difficult situations.</p>
                <div className='flex items-center justify-between mb-[37px]'>
                    <div className='flex flex-col'>
                        <h2 className='text-[17px] font-manrope font-bold'>Budget</h2>
                        <p className='text-[#545A58] font-manrope text-[17px]'>Confidential</p>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='text-[17px] font-manrope font-bold'>Size</h2>
                        <p className='text-[#545A58] font-manrope text-[17px]'>1200m&sup2;</p>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='text-[17px] font-manrope font-bold'>Type</h2>
                        <p className='text-[#545A58] font-manrope text-[17px]'>Office</p>
                    </div>
                </div>
                <div className='flex items-center justify-between mb-[54px]'>
                    <div className='flex flex-col'>
                        <h2 className='text-[17px] font-manrope font-bold'>Status</h2>
                        <p className='text-[#545A58] font-manrope text-[17px]'>Done</p>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='text-[17px] font-manrope font-bold'>Location</h2>
                        <p className='text-[#545A58] font-manrope text-[17px]'>Switzerland</p>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='text-[17px] font-manrope font-bold'>Flat</h2>
                        <p className='text-[#545A58] font-manrope text-[17px]'>8 Rooms</p>
                    </div>
                </div>
                <button className='w-[412px] h-[53px] text-[#fff] bg-[#F85A47] rounded-[5px] font-medium'>YES! I WANT BOOK “OFFICE PACKAGE”</button>
            </div>
        </div>
    </div>
  )
}

export default Featured
