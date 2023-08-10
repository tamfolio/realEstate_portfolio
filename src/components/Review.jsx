import React from "react";

function Review() {
  return (
    <div className="w-[100%] h-[100vh] bg-[#fff] px-[135px] flex flex-col items-start justify-center">
      <h1 className="text-[40px] text-left w-[570px] font-semibold font-manrope mb-[51px]">
        Loved by businesses, and individuals across the globe.
      </h1>
      <div className="flex items-center justify-between w-[100%]">
        <div className="w-[380px] h-[367px] bg-[#fff] rounded-[10px] border-solid border-[1px] border-[#EBEBEB] pl-[38px] pt-[52px]">
          <img src="/assets/Review.png" alt="" className="mb-[33px]" />
          <p className="text-[16px] font-manrope w-[270px] mb-[60px]">
            Moderate children at of outweigh it. Unsatiable it considered
            invitation he travelling insensible. Consulted admitting oh mr up as
            described.
          </p>
          <div className="flex items-center justify-start gap-[20px]">
            <img src="/assets/image.png" alt="" />
            <div>
              <h1 className="text-[16px] font-bold">Jane Cooper</h1>
              <span className="font-manrope text-[14px] text-[#666]">
                Los Angeles, CA
              </span>
            </div>
          </div>
        </div>
        <div className="w-[380px] h-[367px] bg-[#fff] rounded-[10px] border-solid border-[1px] border-[#EBEBEB] pl-[38px] pt-[52px]">
          <img src="/assets/Review.png" alt="" className="mb-[33px]" />
          <p className="text-[16px] font-manrope w-[270px] mb-[60px]">
            The and collecting motionless difficulty son. His hearing staying
            ten colonel met. Sex drew six easy four dear cold
          </p>
          <div className="flex items-center justify-start gap-[20px]">
            <img src="/assets/image (1).png" alt="" />
            <div>
              <h1 className="text-[16px] font-bold">Robert Fox</h1>
              <span className="font-manrope text-[14px] text-[#666]">
                New York City, NY
              </span>
            </div>
          </div>
        </div>
        <div className="w-[380px] h-[367px] bg-[#fff] rounded-[10px] border-solid border-[1px] border-[#EBEBEB] pl-[38px] pt-[52px]">
          <img src="/assets/Review.png" alt="" className="mb-[33px]" />
          <p className="text-[16px] font-manrope w-[270px] mb-[60px] ">
            Sociable on as carriage my position weddings raillery consider.
            Peculiar trifling absolute and wandered vicinity property yet.
          </p>
          <div className="flex items-center justify-start gap-[20px]">
            <img src="/assets/image (2).png" alt="" />
            <div>
              <h1 className="text-[16px] font-bold font-manrope">
                Leslie Alexander
              </h1>
              <span className="font-manrope text-[14px] text-[#666]">
                Buffalo, NJ
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
