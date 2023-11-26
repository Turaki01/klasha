import React from "react";
import {
  RxMagnifyingGlass,
  RxPerson,
  RxQuestionMarkCircled
} from "react-icons/rx";
import { GoBell } from "react-icons/go";

const AppNav = () => {
  return (
    <div className="bg-[#FFFFFF] border-b border-solid border-[#F0F2F5] w-full h-[60px] flex items-center justify-between px-5">
      <h3 className="text-[#101928] font-bold text-[18px]">Dashboard</h3>

      <div className="flex items-center">
        <div className="relative mr-8">
          <RxMagnifyingGlass
            color="#667085"
            className="absolute top-[10px] left-3"
            size={20}
          />
          <input
            type="text"
            placeholder="Search"
            className="border-[#D0D5DD] border border-solid rounded-[8px] h-[40px] w-100 outline-none px-10"
          />
        </div>
        <GoBell className="mr-3 cursor-pointer" size={20} color="#667085" />
        <RxQuestionMarkCircled
          size={21}
          color="#667085"
          className="mr-5 cursor-pointer"
        />
        <div className="border border-solid border-[#b1b0b0] h-[35px] w-[35px] rounded-full flex justify-center items-center">
          <RxPerson />
        </div>
      </div>
    </div>
  );
};

export default AppNav;
