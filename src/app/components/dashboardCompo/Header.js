"use client";
import { Avatar, Button, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <Navbar className="flex justify-between sticky w-full p-2 bg-[rgba(217,217,217,1)]">
        <Image src="/logo.png" width={100} height={100} alt="logo" />
        <div className="flex gap-6">
          <form action="" className="flex self-center p-3">
            <TextInput
              type="text"
              placeholder="Search..."
              rightIcon={AiOutlineSearch}
              className="hidden lg:inline"
            />
          </form>
          <Button className="w-12 h-10 lg:hidden" color="gray" pill>
            <AiOutlineSearch />
          </Button>
          <div className="flex self-center">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"
              />
            </svg>
          </div>
          <div className="flex gap-3 justify-center text-center ">
            <p className="flex p-1 bg-white w-[100px] h-[100px] rounded-full">
              <Avatar className="w-full h-full rounded-full object-fill bg-white-200 cursor-pointer" />
            </p>
            <p className="flex flex-col justify-center text-center ">
              <span className="">Sarah Sarah</span>
              <span className="">wrfwe</span>
            </p>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
