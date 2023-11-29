import React from "react";
import DashboardOverview from "./dashboardOverview";
import DashboardChart from "./dashboardChart";
import SendWire from "./sendWire";
import DaySelector from "components/DaySelector";
import { currencyList, emailSampleDropdown, listOfDays } from "utils/constant";
import { DayObjectInterface } from "interfaces/util-interface";

import ChevronIcon from "assets/svg/chevron-down.svg";
import Button from "components/Button";
import DropdownComponent from "components/DropdownComponent";

const Dashboard = () => {
  const [selectedDay, setSelectedDay] = React.useState<DayObjectInterface>();
  const handleDaySelection = (value: DayObjectInterface) => {
    setSelectedDay(value);
  };

  const [selectedCurrency, setSelectedCurrency] = React.useState<string>("USD");
  const [selectedEmail, setSelectedEmail] = React.useState<string>("");

  const handleSelectedCurrency = (e: string) => {
    setSelectedCurrency(e);
  };

  const handleEmailSelection = (e: string) => {
    setSelectedEmail(e);
  };

  return (
    <div className="mx-8 mt-[4rem]">
      <h3 className="text-[#1A1A1A] font-[500] text-[20px] leading-[32px]">
        Sales overview
      </h3>

      <DashboardOverview />

      <div className="md:grid grid-cols-[68%_auto] gap-7 mb-5 mt-[3rem]">
        <div className="md:grid grid-cols-[40%_auto] ">
          <div className="flex items-center md:justify-start justify-between">
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

            <div className="mr-3">
              <DropdownComponent
                dropdownOption={currencyList}
                selectedOption={selectedCurrency}
                handleChange={(e: string) => handleSelectedCurrency(e)}
              />
            </div>
          </div>
          <div className="md:grid grid-cols-[60%_auto] gap-2 md:mt-0 mt-5">
            <div className="mr-3 md:mb-0 mb-3">
              <DropdownComponent
                placeholder="Email"
                borderColor="#f4f4f4"
                textColor="#565c69"
                dropdownOption={emailSampleDropdown}
                selectedOption={selectedEmail}
                handleChange={(e: string) => handleEmailSelection(e)}
              />
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
        <div></div>
      </div>

      <div className="md:grid grid-cols-[68%_auto] gap-7">
        <DashboardChart />

        <SendWire />
      </div>
    </div>
  );
};

export default Dashboard;
