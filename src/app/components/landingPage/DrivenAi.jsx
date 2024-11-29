import Image from "next/image";
import React from "react";

const DrivenAi = () => {
  return (
    <>
      <div className="flex flex-col bg-[rgba(255,255,255,1)] pt-14">
        <div className="flex w-full flex-wrap gap-8 justify-center text-center mt-24 py-16">
          <Image
            src="/images/ai1.png"
            width={500}
            height={500}
            alt="tracking-image"
            objectFit="contain"
          />
          <Image
            src="/images/ai2.png"
            width={500}
            height={500}
            alt="report-image"
            objectFit="contain"
          />
          <Image
            src="/images/ai3.png"
            width={500}
            height={500}
            alt="report-image"
            objectFit="contain"
          />
        </div>
        <button className=" self-center p-[20px] px-[30px] text-center rounded-[26px] text-xl font-normal mb-6 text-[rgba(230,242,242,1)]  bg-[rgba(66,133,244,1)]">
          Get Started
        </button>
      </div>
    </>
  );
};

export default DrivenAi;
