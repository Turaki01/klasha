import React from "react";
import DashboardOverview from "./dashboardOverview";
import DashboardChart from "./dashboardChart";
import SendWire from "./sendWire";
import DaySelector from "components/DaySelector";
import { listOfDays } from "utils/constant";
import { DayObjectInterface } from "interfaces/util-interface";

import ChevronIcon from "assets/svg/chevron-down.svg";
import Button from "components/Button";

const Dashboard = () => {
  const [selectedDay, setSelectedDay] = React.useState<DayObjectInterface>();
  const handleDaySelection = (value: DayObjectInterface) => {
    setSelectedDay(value);
  };
  return (
    <div className="mx-8 mt-[4rem]">
      <h3 className="text-[#1A1A1A] font-[500] text-[20px] leading-[32px]">
        Sales overview
      </h3>

      <DashboardOverview />

      <div className="grid grid-cols-[68%_auto] gap-7">
        <div className="flex items-center mb-3 mt-[3rem]">
          <h3 className="text-[20px] leading-[32px] mr-2">Sales</h3>
          <div className="border-r border-solid border-[#e5e5e5] h-[25px] mr-3"></div>

          <div className="flex">
            {listOfDays.map((el, index) => (
              <DaySelector
                key={index + el.value}
                dayElement={el}
                handleClick={() => handleDaySelection(el)}
                isActive={selectedDay?.value === el.value}
              />
            ))}
          </div>

          <Button
            icon={ChevronIcon}
            iconHeight={14}
            iconWidth={14}
            label="Download report"
            borderColor="#0A0A0A"
            bgColor="#ffffff"
            color="#0A0A0A"
            border={8}
            height={45}
            fontSize={14}
            paddingX={1}
          />
        </div>
        <div></div>
      </div>

      <div className="grid grid-cols-[68%_auto] gap-7">
        <DashboardChart />

        <SendWire />
      </div>
    </div>
  );
};

export default Dashboard;
