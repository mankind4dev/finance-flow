import Tracking from "./components/landingPage/Tracking";
import SetUp from "./components/landingPage/SetUp";
import Reports from "./components/landingPage/Reports";
import LinkBank from "./components/landingPage/LinkBank";
import Swipper from "./components/landingPage/Swipper";
import Frequent from "./components/landingPage/Frequent";
import DrivenAi from "./components/landingPage/DrivenAi";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Header /> 
      <div className="flex flex-col min-h-screen min-w-full max-w-lg gap-y-48">
        <section className="flex flex-col gap-y-16 ">
          <Tracking />
          <SetUp />
          <Reports />
        </section>
        <section>
          <LinkBank />
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
      <Footer />
    </>
  );
}
