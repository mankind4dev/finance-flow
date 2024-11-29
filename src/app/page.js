import Image from "next/image";
import Tracking from "./components/landingPage/Tracking";
import SetUp from "./components/landingPage/SetUp";
import Reports from "./components/landingPage/Reports";
import LinkBank from "./components/landingPage/LinkBank";
import Swipers from "./components/Swipers";
import Test from "./components/Test";
import Swipper from "./components/landingPage/Swipper";
import Frequent from "./components/landingPage/Frequent";
import DrivenAi from "./components/landingPage/DrivenAi";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen min-w-full max-w-lg px-8    ">
      <section className="flex flex-col gap-y-16 ">
        <Tracking />
        <SetUp />
        <Reports />
      </section>
      <section className="flex w-full my-20">
        <Swipper />
      </section>

      <section className="">
        <Frequent />
      </section>

      <section className="">
        <DrivenAi />
      </section>
    </div>
  );
}
