import React from "react";
import DashboardOverview from "./dashboardOverview";
import DashboardChart from "./dashboardChart";
import SendWire from "./sendWire";

const Dashboard = () => {
  return (
    <div className="mx-8 mt-[4rem]">
      <h3 className="text-[#1A1A1A] font-[500] text-[20px] leading-[32px]">
        Sales overview
      </h3>

      <DashboardOverview />

      <div className="grid grid-cols-[70%_auto] gap-2 mt-[3rem]">
        <DashboardChart />
        <SendWire />
      </div>
    </div>
  );
};

export default Dashboard;
