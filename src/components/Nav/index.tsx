import LanguageDropdown from "components/LanguageDropdown";
import ProfileDropdown from "components/ProfileDropdown";
import AppContext from "context/appContext";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  const { storehamburgerOption } = React.useContext(AppContext);
  return (
    <div className="flex px-5 items-center border-b border-solid border-[#EDEDED] h-[60px] justify-between">
      <div>
        <RxHamburgerMenu
          className="lg:hidden block"
          size={25}
          onClick={() => storehamburgerOption(true)}
        />
      </div>
      <div className="flex items-center">
        <ProfileDropdown />
        <div className="mx-2"></div>
        <LanguageDropdown />
      </div>
    </div>
  );
};

export default Nav;
