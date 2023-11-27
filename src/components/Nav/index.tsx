import LanguageDropdown from "components/LanguageDropdown";
import ProfileDropdown from "components/ProfileDropdown";
import React from "react";

const Nav = () => {
  return (
    <div className="flex px-5 items-center border-b border-solid border-[#EDEDED] h-[60px] justify-end">
      <div className="flex items-center">
        <ProfileDropdown />
        <div className="mx-2"></div>
        <LanguageDropdown />
      </div>
    </div>
  );
};

export default Nav;
