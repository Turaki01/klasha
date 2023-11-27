import Button from "components/Button";
import DaySelector from "components/DaySelector";
import { DayObjectInterface } from "interfaces/util-interface";
import React from "react";
import { listOfDays } from "utils/constant";

import ChevronIcon from "assets/svg/chevron-down.svg";

const DashboardChart = () => {
  const [selectedDay, setSelectedDay] = React.useState<DayObjectInterface>();
  const handleDaySelection = (value: DayObjectInterface) => {
    setSelectedDay(value);
  };
  return (
    <div>
      <div className="flex items-center">
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
    </div>
  );
};

export default DashboardChart;
