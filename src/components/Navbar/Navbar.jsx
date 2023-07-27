import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-[135px] py-[36px] z-10">
      <h1 className="text-[23px] text-[#31353B] font-extrabold">SmartSpace</h1>
      <div className="flex items-center justify-center gap-[46px]">
       <p className="text-[13px] font-bold text-[#000]">Home</p>
       <p className="text-[13px] font-bold text-[#000]">About</p>
       <p className="text-[13px] font-bold text-[#000]">Service</p>
       <p className="text-[13px] font-bold text-[#000]">Portfolio</p>
       <p className="text-[13px] font-bold text-[#000]">Blog</p>
       <p className="text-[13px] font-bold text-[#000]">Contact</p>
      </div>
    </div>
  );
};

export default Navbar;
