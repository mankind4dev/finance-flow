"use client";
import { FcGoogle } from "react-icons/fc";
import { FaRegEnvelope } from "react-icons/fa";
import { PiLockKeyLight } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";

const SignIn = () => {
  return (
    <>
      <div className="min-w-full min-h-full ">
        <div className="md:flex sm:row h-[100vh] w-[100%]    ">
          <div className="flex flex-col px-8 pt-5  w-[100%] bg-[rgba(255,255,255,0.3)]">           
              <Image
                src="/logo.png"
                alt="logo"
                width={200}
                height={100}
                className="items-center"
              /> 
            <p className="text-[20px] font-[400] md:mt-[8rem] sm:mt-[2rem] w-full">
              This app has been a game-changer for my small business! Connecting
              my bank account was super easy, and now I can see all my cash flow
              and expenses in one place. The automated reports save me so much
              time I used to spend hours trying to make sense of my finances.
              The insights are also spot-on, helping me identify where I am
              overspending. Highly recommend this to any SME owner who wants to
              stay on top of their financial health without the stress!
            </p>
            <p className="text-[25px] font-[600] mt-3   ">
              .Jane O., Owner of FreshBakes Confectioneries
            </p>
          </div>

          <div className="w-[100%]  p-24 bg-white align-center">
            <div className="flex flex-col w-full justify-center">
              <h1 className="text-start text-[28px] font-[700] mb-4 text-black">
                Welcome back
              </h1>
              <button className="flex justify-center p-2 rounded-[30px]  w-full bottom-2 border-[1px] border-[rgba(66,133,244,1)] text-[rgba(0,0,0,1)] text-[20px] font-[500]">
                <FcGoogle className="flex text-center self-center mr-4 text-20" />
                Sign in with Google
              </button>
              <p className="relative flex justify-center mt-10 border-[1px] border-[rgba(188,188,188,1)]">
                <span className="absolute flex justify-center text-center self-center text-[rgba(188,188,188,1)] text-[20px] bg-white px-10">
                  OR
                </span>
              </p>
              <form className="flex flex-col   mt-5">
                <label className="text-[20px] font[500] mb-2 mt-6 text-[rgba(0,0,0,1)]">
                  Email Address
                </label>
                <div className="flex text-start place-items-center  border-[1px] border-[rgba(66,133,244,1)] rounded-[8px]  p-1">
                  <FaRegEnvelope className="text-start justify-center pl-2  text-[35px]" />
                  <input
                    type="email"
                    className="text-start text-[20px] w-full  p-2 outline-none"
                    placeholder="example@gmail.com"
                  />
                </div>
                <label className="text-[20px] font-[500] mb-2 mt-6 text-[rgba(0,0,0,1)]">
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
                <Link href="/forget-password">
                  <p className="text-end justify-center pt-2 hover:underline">
                    Forgotten password?
                  </p>
                </Link>

                <button
                  type="submit"
                  className="flex justify-center p-4 rounded-[30px]  w-full bottom-2 mt-8 text-]rgba(230,242,242,1)]   bg-[rgba(66,133,244,1)] text-[rgba(0,0,0,1)] text-[20px] font-[500]"
                >
                  Sign in
                </button>
              </form>
              <div className="flex justify-center text-center mt-3 whitespace-nowrap">
                <p className="text-[rgba(83,83,83,1)] text-[16px]">
                  Do not have an account?
                </p>
                <Link
                  href={"/signup"}
                  className="ml-2 text-[rgba(66,133,244,1)] text-[18px]"
                >
                  Create an account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
