import React from "react";
import { PiCaretDownBold } from "react-icons/pi";
import "./style.scss";

const LanguageDropdown = () => {
  return (
    <div className="lang-dropdown-container">
      <div className="flex items-center">
        <p className="text-[14px] font-[500] mr-2">En</p>
        <PiCaretDownBold />
      </div>

      <section className="lang-dropdownWrapper">
        <menu className="lang-dropdownMenu">
          <p className="text-[14.5px] h-[40px] flex px-3 items-center cursor-pointer">
            Fr
          </p>
        </menu>
      </section>
    </div>
  );
};

export default LanguageDropdown;
