import Image from "next/image";
import Tracking from "./components/landingPage/Tracking";
import SetUp from "./components/landingPage/SetUp";
import Reports from "./components/landingPage/Reports";
import LinkBank from "./components/landingPage/LinkBank"; 

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen min-w-full max-w-lg px-8 pb-2   ">
      
      <section className="flex flex-col gap-y-16 ">
        <Tracking />
        <SetUp />
        <Reports />
      </section> 

      <section className="">
        <LinkBank />
      </section>

      <section className=""> 
      </section>
       
    </div>
  );
}
