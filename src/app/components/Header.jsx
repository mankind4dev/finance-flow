import Link from "next/link";
import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import Image from "next/image";
import { PiPlus } from "react-icons/pi";
import { FcMenu } from "react-icons/fc";
import { BsMenuApp } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  return (
    <>
      <div className="bg-[rgba(255,255,255,1)]">
        <div className="flex text-center justify-between py-6 pr-16 pl-16">
          <Link href={"/"}>
            <Image src="/logo.png" alt="logo" width={200} height={100} />
          </Link>
          <ul className="hidden md:flex text-center self-center ">
            <li className="text-[20px] font-[500] mr-6 text-[rgba(0,0,0,1)] hover:text-gray-200">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="text-[20px] font-[500] mr-6 text-[rgba(0,0,0,1)] hover:text-gray-200">
              <Link href={"/feature"}>Features</Link>
            </li>
            <li className="text-[20px] font-[500] mr-6 text-[rgba(0,0,0,1)] hover:text-gray-200">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="text-[20px] font-[500] mr-6 text-[rgba(0,0,0,1)] hover:text-gray-200">
              <Link href={"/contact-us"}>Contact us</Link>
            </li>
          </ul>
          <div className="flex justify-between items-center">
            <Link href={"/signup"}>
              <li className="hidden md:flex text-[20px] font-[500] mr-6 whitespace-nowrap bg-[rgba(66,133,244,1)] text-white list-none py-4 px-12 rounded-[50px]">
                Get Started
              </li>
            </Link>
            <Link href={"/signin"}>
              <li className="text-[20px] font-[500] mr-6 whitespace-nowrap bg-[rgba(66,133,244,1)] text-white list-none py-4 px-12 rounded-[50px]">
                Sign In
              </li>
            </Link>
          </div>
          <div className="flex justify-center text-center md:hidden">
            <IoMdMenu className="self-center text-[60px] text-white cursor-pointer " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
