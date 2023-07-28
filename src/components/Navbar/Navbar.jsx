import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-[135px] py-[36px] z-10">
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
  );
};

export default Navbar;
