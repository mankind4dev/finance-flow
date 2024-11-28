"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-800 ">
        <div className="flex text-center justify-around p-3">
          <Link href={"/"}>
            <Image
              src="/mankind4dev.png"
              alt="logo"
              width={100} height={100}
            />
          </Link>
          <p className="text-white text-2xl self-center">&copy; Finance Flow<span className="  p-[1px] mx-2 w-[2px] h-full bg-gray-500"></span> All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
