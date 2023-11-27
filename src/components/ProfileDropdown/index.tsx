import React from "react";
import { PiCaretDownBold } from "react-icons/pi";
import "./style.scss";

import { ReactComponent as ProfileIcon } from "assets/svg/profile.svg";

const ProfileDropdown = () => {
  return (
    <div className="profile-dropdown-container">
      <div className="flex items-center">
        <ProfileIcon width={25} className="mr-2" />
        <PiCaretDownBold />
      </div>

      <section className="profile-dropdownWrapper">
        <menu className="profile-dropdownMenu">
          <p className="text-[14.5px] h-[40px] flex px-3 items-center cursor-pointer">
            My Profile
          </p>
          <p className="text-[14.5px] h-[40px] flex px-3 items-center cursor-pointer">
            Logout
          </p>
        </menu>
      </section>
    </div>
  );
};

export default ProfileDropdown;
