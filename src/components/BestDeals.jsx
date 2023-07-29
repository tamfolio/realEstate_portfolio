import React, { useState } from "react";

const dealsType = [
  { id: 1, title: "Residential Property" },
  { id: 2, title: "Commercial Property" },
  { id: 3, title: "Agriculture Property" },
  { id: 4, title: "Industrial Property" },
];

function BestDeals() {
  const [selected, setSelected] = useState(1);
  const handleColor = (row) => {
    setSelected(row.id);
  };
  return (
    <div className="w-[100%] h-[100vh] bg-[#fff] flex flex-col items-center justify-center px-[135px] relative">
      <div className="flex items-start justify-between w-[100%]">
        <div className="w-[100%]">
          <h1 className="text-[40px] font-semibold font-manrope">
            Best Real Estate Deals
          </h1>
          <p className="w-[470px] text-[16px] font-manrope">
            Colonel gravity get thought fat smiling add but. Wonder twenty
            hunted and put income set desire expect.
          </p>
        </div>
        <button className="text-[#fff] w-[220px] h-[65px] bg-[#F85A47] font-semibold rounded-[5px]">
          View All Property
        </button>
      </div>
      <div className="">
        <div className="flex items-start mt-[50px] gap-[54px]">
          {dealsType.map((deals) => (
            <div
              style={{
                color: deals.id === selected ? "#F85A47" : "",
                fontWeight: deals.id === selected ? "700" : "",
              }}
              onClick={() => handleColor(deals)}
              className="cursor-pointer"
            >
              {deals.title}
            </div>
          ))}
        </div>
        {selected === 1 && (
          <div className="flex items-center justify-between mt-[50px] gap-[50px]">
            <img src="/assets/house1.jpg" alt="" />
            <img src="/assets/house2.jpg" alt="" />
            <img src="/assets/house3.jpg" alt="" />
          </div>
        )}
        {selected === 2 && (
          <div className="flex items-center justify-between mt-[50px] gap-[50px]">
            <img src="/assets/house2.jpg" alt="" />
            <img src="/assets/house3.jpg" alt="" />
            <img src="/assets/house1.jpg" alt="" />
          </div>
        )}
        {selected === 3 && (
          <div className="flex items-center justify-between mt-[50px] gap-[50px]">
            <img src="/assets/house1.jpg" alt="" />
            <img src="/assets/house3.jpg" alt="" />
            <img src="/assets/house2.jpg" alt="" />
          </div>
        )}
         {selected === 4 && (
          <div className="flex items-center justify-between mt-[50px] gap-[50px]">
            <img src="/assets/house2.jpg" alt="" />
            <img src="/assets/house1.jpg" alt="" />
            <img src="/assets/house3.jpg" alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default BestDeals;
