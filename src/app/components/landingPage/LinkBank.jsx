import Image from "next/image";
import React from "react";

const LinkBank = () => {
  return (
    <>
      <div className="flex flex-col mt-28">
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-[68px] font-[600] px-32 ">
            LINK YOUR BANK CARDS AND GET ALERTS ON EXPENSES AND INCOME EASILY
          </h1>
          <p className="text-[32px] font-[600] mt-2">
            YOUR SECURITY IS OUR NO 1 CONCERN
          </p>
        </div>
        <div className="flex w-full h-[500px] gap-x-8 justify-center text-center mt-24 ">
          <Image
            src="/images/link1.png"
            width={800}
            height={500}
            alt="tracking-image"
            objectFit="contain"
          />
          <Image
            src="/images/link2.png"
            width={800}
            height={500}
            alt="report-image"
            objectFit="contain"
          />
        </div>
        <div className="flex items-end  justify-center mt-32 gap-7 ">
          <button className="p-[20px] px-[30px] rounded-[26px] text-xl font-normal  bg-[rgba(230,242,242,1)]">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default LinkBank;
