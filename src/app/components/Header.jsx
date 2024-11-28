import Link from "next/link";
import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";

const Header = () => {
  return (
    <>
      <div className="bg-gray-800 ">
        <div className="flex text-center justify-around p-3">
          <Link href={"/"}>
            <img
              src="/mankind4dev.png"
              alt="logo"
              className="w-[80px] h-[60px]"
            />
          </Link>
          <ul className="flex text-center self-center">
            <li className="text-2xl mr-6 text-white">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="text-2xl mr-3 text-white">
              <Link href={"/sign-in"}>Sign In</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
