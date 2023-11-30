import { DayObjectInterface } from "interfaces/util-interface";
import React from "react";

interface DaySelectorProps {
  handleClick: () => void;
  dayElement: DayObjectInterface;
  isActive: boolean;
}

const DaySelector: React.FC<DaySelectorProps> = ({
  handleClick,
  dayElement,
  isActive
}) => {
  return (
    <div className="flex items-center">
      <p
        data-testid="daySelectorEl"
        onClick={handleClick}
        className={`font-bold text-[14px] leading-[22.4px] mr-3 cursor-pointer ${
          isActive && "text-[#EF2C5A]"
        }`}
      >
        {dayElement.name}
      </p>
    </div>
  );
};

export default DaySelector;
