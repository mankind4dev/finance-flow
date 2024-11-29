import Link from "next/link";
import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="bg-[rgba(66,133,244,1)]">
        <div className="flex text-center justify-between py-8 pr-16 pl-16">
          <Link href={"/"}>
            <Image src="/logo.png" alt="logo" width={200} height={100} />
          </Link>
          <ul className="flex text-center self-center">
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
              <li className="text-[20px] font-[500] mr-6 bg-[rgba(230,242,242,1)] text-[rgba(66,133,244,1)] list-none py-4 px-12 rounded-[50px]">
                Get Started
              </li>
            </Link>
            <Link href={"/signin"}>
              <li className="text-[20px] font-[500] mr-6 bg-[rgba(230,242,242,1)] text-[rgba(66,133,244,1)] list-none py-4 px-12 rounded-[50px]">
                Sign In
              </li>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
