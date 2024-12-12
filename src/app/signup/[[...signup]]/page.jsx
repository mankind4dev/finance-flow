import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaRegEnvelope } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { PiLockKeyLight } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";

const SignUp = () => {
  return (
    <>
      <div className="min-w-full min-h-full ">
        <div className="sm:row md:flex h-[100vh] w-[100%]">
          <div className="flex flex-col px-8 w-[100%] pt-6 bg-[rgba(255,255,255,0.3)]">
            <Image
              src="/logo.png"
              alt="logo"
              width={200}
              height={100}
              className="items-center"
            />
            <p className="text-[20px] font-[400] sm:mt-[2rem] md:mt-[6rem] w-full">
              This app has been a game-changer for my small business! Connecting
              my bank account was super easy, and now I can see all my cash flow
              and expenses in one place. The automated reports save me so much
              time I used to spend hours trying to make sense of my finances.
              The insights are also spot-on, helping me identify where I am
              overspending. Highly recommend this to any SME owner who wants to
              stay on top of their financial health without the stress!
            </p>
            <p className="text-[25px] font-[600] py-3">
              .Jane O., Owner of FreshBakes Confectioneries
            </p>
          </div>

          <div className="w-full  bg-white align-center   ">
            <div className="flex flex-col w-full justify-center px-32 pt-7   ">
              <h1 className="text-start text-[28px] font-[700] mb-4 text-black">
                Create an account
              </h1>
              <button className="flex justify-center p-2 rounded-[30px]  w-full bottom-2 border-[1px] border-[rgba(66,133,244,1)] text-[rgba(0,0,0,1)] text-[20px] font-[500]">
                <FcGoogle className="flex text-center self-center mr-4 text-20" />
                Sign up with Google
              </button>
              <p className="relative flex justify-center mt-10 border-[1px] border-[rgba(188,188,188,1)]">
                <span className="absolute flex justify-center text-center self-center text-[rgba(188,188,188,1)] text-[20px] bg-white px-10">
                  OR
                </span>
              </p>
              <form action="" className="flex flex-col mt-5">
                <label className="text-[20px] font[500] mb-1 text-[rgba(0,0,0,1)]">
                  Company Name
                </label>
                <div className="flex text-start place-items-center  border-[1px] border-[rgba(66,133,244,1)] rounded-[8px]  p-1">
                  <BsFillPeopleFill className="text-start justify-center pl-2  text-[35px]" />
                  <input
                    type="text"
                    className="text-start text-[20px]  p-2 w-full outline-none"
                    placeholder="Type your company name...."
                  />
                </div>

                <label className="text-[20px] font[500] mb-1 mt-4 text-[rgba(0,0,0,1)]">
                  Email Address
                </label>
                <div className="flex text-start place-items-center  border-[1px] border-[rgba(66,133,244,1)] rounded-[8px]  p-1">
                  <FaRegEnvelope className="text-start justify-center pl-2  text-[35px]" />
                  <input
                    type="email"
                    className="text-start text-[20px]  p-2 w-full outline-none"
                    placeholder="example@gmail.com"
                  />
                </div>
                <label className="text-[20px] font[500] mb-1 mt-4 text-[rgba(0,0,0,1)]">
                  Password
                </label>
                <div className="flex text-start place-items-center  border-[1px] border-[rgba(66,133,244,1)] rounded-[8px]  p-1">
                  <PiLockKeyLight className="text-start justify-center pl-2  text-[35px]" />
                  <input
                    type="password"
                    className="text-start text-[20px]  p-2 w-full outline-none"
                    placeholder="Enter your password...."
                  />
                </div>
                <label className="text-[20px] font[500] mb-1 mt-4 text-[rgba(0,0,0,1)]">
                  Country of residence
                </label>
                <div className="flex text-start place-items-center  border-[1px] border-[rgba(66,133,244,1)] rounded-[8px]  p-1">
                  <select 
                    className="p-2  text-[20px] w-full outline-none"
                  >
                    <option value="">e.g Nigeria</option>
                    <option value="Canada">Canada</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Nigeria">Nigeria</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="flex justify-center p-4 rounded-[30px]  w-full bottom-2 mt-5  text-[rgba(230,242,242,1)]  bg-[rgba(66,133,244,1)] text-[rgba(0,0,0,1)] text-[20px] font-[500]"
                >
                  Create an account
                </button>
              </form>
              <div className="flex justify-center text-center py-3  whitespace-nowrap">
                <p className="text-[rgba(83,83,83,1)] text-[16px]">
                  Already have an account?
                </p>
                <Link
                  href={"/signin"}
                  className="ml-2 text-[rgba(66,133,244,1)] text-[18px]"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
