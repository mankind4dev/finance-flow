import React from "react";
import DashboardAside from "../components/dashboard/DashboardAside";
import DashBoardHome from "../components/dashboard/DashBoardHome";

const page = () => {
  return (
    <>
      <div className="flex gap-2">
        <div className="flex justify-center text-center bg-slate-600 w-[300px] h-[100vh]">
          <DashboardAside />
        </div>
        <div className="">
          <DashBoardHome />
        </div>
      </div>
    </>
  );
};

export default page;
