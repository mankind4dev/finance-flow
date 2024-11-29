import Image from "next/image";
import React from "react";

const Reports = () => {
  return (
    <>
      <div className="flex  w-full mx-auto mt-8">
        <div className="flex flex-col flex-1 justify-center text-start  p-8">
          <p className="flex-wrap items-start text-[48px] font-[600] ">
          GET YOUR REPORTS DAILY, WEEKLY OR MONTHLY
          </p>
          <div className="flex items-end  justify-center mt-32 gap-7 ">
            <button className="p-[20px] px-[30px] rounded-[26px] text-xl font-normal  bg-[rgba(230,242,242,1)]">Get Started</button> 
          </div>
        </div>
        <div className="  flex-1 relative  w-full h-[600px]  ">
          <Image
            src="/images/report.png" 
            layout="fill"
            alt="tracking-image"
            objectFit="contain"
          />
        </div>
      </div>
    </>
  );
};

export default Reports;
