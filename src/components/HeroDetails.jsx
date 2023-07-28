import React from "react";

function HeroDetails() {
  return (
    <div className="flex items-start justify-center relative z-20 gap-[68px] mt-[20px]">
      <div className="mt-[20px] relative">
        <p className="text-[22px] text-[#f90] font-dmsans font-bold">RESIDENTIAL & OFFICE SPACES</p>
        <h2 className="text-[54px] text-[#000] font-manrope font-extrabold w-[484px] leading-[73px]">Smart Living Style for Smart People</h2>
        <p className="w-[499px] text-[17px] text-[#31353B] font-manrope mb-[48px]">Much did had call new drew that kept. Limits expect wonder law she. Now has you views woman noisy match money rooms.</p>
        <div className="w-[756px] h-[86px] bg-[#FFF] border-[1px] border-solid border-[#DADADA] absolute flex items-center justify-start pl-[33px] gap-[20px]">
            <img src="/assets/house.png" alt="" className="w-[20px] h-[20px]" />
            <input type="text" className="w-[456px] h-[80px] bg-[#FFF] border-none outline-none" placeholder="Enter Zipcode to search properties"/>
            <button className="absolute w-[188px] h-[86px] bg-[#F85A47] right-[-1px] top-[-1px] text-[17px] text-[#fff] font-bold">Search Now!</button>
        </div>
        <div className="absolute mt-[200px]">
            <h1 className="text-[17px] text-[#31353B] mb-[28px]">Our Amazing Partners</h1>
            <div className="flex items-center justify-between gap-[50px]">
                <img src="/assets/buzz.svg" alt="" />
                <img src="/assets/chase.svg" alt="" />
                <img src="/assets/microsoft.svg" alt="" />
                <img src="/assets/gucc.svg" alt="" />
                <img src="/assets/airbnb.svg" alt="" />
                <img src="/assets/uber.svg" alt="" />
            </div>
        </div>
      </div>
      <div>
        <img src="/assets/header.png" alt="" className="w-[603px] h-[573px]"/>
      </div>
    </div>
  );
}

export default HeroDetails;
