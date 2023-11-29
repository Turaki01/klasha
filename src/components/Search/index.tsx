import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchInput = () => {
  return (
    <div className="relative">
      <BiSearch color="#0a0a0a" className="absolute right-2 top-[10px]" />
      <input
        className="border border-solid border-[#F0F0F0] outline-none h-[36px] px-3 rounded-[6px] text-[14px]"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchInput;
