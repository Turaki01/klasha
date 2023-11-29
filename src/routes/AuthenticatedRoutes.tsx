import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { Routes } from "./routes-constants";
import AppRoutes from "./routes.config";
import { NavLink } from "react-router-dom";

import { ReactComponent as Logo } from "assets/svg/logo.svg";

// Menu SVG import
import ChevronIcon from "assets/svg/chevron-left.svg";
import HelpIcon from "assets/svg/help.svg";
import {
  PiArrowsClockwise,
  PiArrowsDownUp,
  PiChartPieSlice,
  PiLink,
  PiWalletLight
} from "react-icons/pi";
import { BsBarChart } from "react-icons/bs";
import { GoMegaphone } from "react-icons/go";
import { TbArrowsRightLeft } from "react-icons/tb";
import Button from "components/Button";
import Nav from "components/Nav";
import AppContext from "context/appContext";

// Menu SVG import

const AuthenticatedRoutes = () => {
  const AuthenticatedRoutes = AppRoutes.filter((route) => route.isPrivate);

  const { ishamburgerOpened, storehamburgerOption } =
    React.useContext(AppContext);

  const handlePanelClosing = () => {
    storehamburgerOption(false);
  };

  return (
    <div className="flex h-[100vh]">
      <div className={`sidebar ${ishamburgerOpened ? "mobile-menu-show" : ""}`}>
        <div className="p-6">
          <Logo width={95} className="mb-6" />

          {/* menu items */}
          <div className="mt-10">
            <p className="text-[#8D8D8D] text-[15px] general-san-medium leading-[15px] mb-3">
              Main Pages
            </p>
            <NavLink
              to={Routes.Dashboard}
              className="h-[40px] rounded-[8px] flex items-center text-[#0A0A0A] text-[15px] cursor-pointer font-[400]"
              activeClassName={"!text-[#EF2C5A] !font-[600]"}
              onClick={() => storehamburgerOption(false)}
            >
              <PiChartPieSlice size={23} className="mr-2" /> Dashboard
            </NavLink>

            <NavLink
              to={Routes.Balances}
              className="h-[40px] rounded-[8px] flex items-center text-[#0A0A0A] text-[15px] cursor-pointer font-[400]"
              activeClassName={"!text-[#EF2C5A] !font-[600]"}
            >
              <PiWalletLight size={23} className="mr-2" /> Balances
            </NavLink>

            <NavLink
              to={Routes.Transactions}
              className="h-[40px] rounded-[8px] flex items-center text-[#0A0A0A] text-[15px] cursor-pointer font-[400]"
              activeClassName={"!text-[#EF2C5A] !font-[600]"}
              onClick={() => storehamburgerOption(false)}
            >
              <PiArrowsDownUp size={23} className="mr-2" /> Transactions
            </NavLink>

            <NavLink
              to={Routes.Analytics}
              className="h-[40px] rounded-[8px] flex items-center text-[#0A0A0A] text-[15px] cursor-pointer font-[400]"
              activeClassName={"!text-[#EF2C5A] !font-[600]"}
            >
              <BsBarChart size={22} className="mr-3" /> Analytics
            </NavLink>

            <NavLink
              to={Routes.Marketing}
              className="h-[40px] rounded-[8px] flex items-center text-[#0A0A0A] text-[15px] cursor-pointer font-[400]"
              activeClassName={"!text-[#EF2C5A] !font-[600]"}
            >
              <GoMegaphone size={22} className="mr-3 rotate-[347deg]" />{" "}
              Marketing
            </NavLink>

            <NavLink
              to={Routes.ExchangeRates}
              className="h-[40px] rounded-[8px] flex items-center text-[#0A0A0A] text-[15px] cursor-pointer font-[400]"
              activeClassName={"!text-[#EF2C5A] !font-[600]"}
            >
              <PiArrowsClockwise size={22} className="mr-2 rotate-[324deg]" />{" "}
              Exchange rates
            </NavLink>

            <p className="text-[#8D8D8D] text-[15px] general-san-medium leading-[15px] mt-6 mb-3">
              Accept payments
            </p>

            <NavLink
              to={Routes.Checkout}
              className="h-[40px] rounded-[8px] flex items-center text-[#0A0A0A] text-[15px] cursor-pointer font-[400]"
              activeClassName={"!text-[#EF2C5A] !font-[600]"}
            >
              <PiArrowsClockwise size={22} className="mr-2 rotate-[324deg]" />{" "}
              Checkout
            </NavLink>

            <NavLink
              to={Routes.PaymentLinks}
              className="h-[40px] rounded-[8px] flex items-center text-[#0A0A0A] text-[15px] cursor-pointer font-[400]"
              activeClassName={"!text-[#EF2C5A] !font-[600]"}
            >
              <PiLink size={22} className="mr-2" /> Payment Links
            </NavLink>

            <p className="text-[#8D8D8D] text-[15px] general-san-medium leading-[15px] mt-6 mb-3">
              Send payments
            </p>

            <NavLink
              to={Routes.Wire}
              className="h-[40px] rounded-[8px] flex items-center text-[#0A0A0A] text-[15px] cursor-pointer font-[400]"
              activeClassName={"!text-[#EF2C5A] !font-[600]"}
            >
              <TbArrowsRightLeft size={22} className="mr-2" /> Wire
            </NavLink>
          </div>
          {/* menu items */}
        </div>
        <div className="flex flex-col mt-10 max-w-[10rem] mx-auto mb-5">
          <Button
            icon={HelpIcon}
            iconHeight={18}
            iconWidth={18}
            label="Support"
            border={25}
            height={40}
            fontSize={14}
            paddingX={1}
          />
          <div className="mb-3"></div>
          <Button
            icon={ChevronIcon}
            iconHeight={14}
            iconWidth={14}
            label="Hide panel"
            borderColor="#0A0A0A"
            bgColor="#ffffff"
            color="#0A0A0A"
            border={8}
            height={40}
            fontSize={14}
            onClick={handlePanelClosing}
            paddingX={1}
          />
        </div>
      </div>
      <div className="lg:w-[calc(100%_-17.5rem)] bg-[#ffffff] overflow-y-auto">
        <Nav />
        <div onClick={() => storehamburgerOption(false)}>
          <Switch>
            {AuthenticatedRoutes.map((route) => {
              return (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              );
            })}

            <Redirect to={Routes.Dashboard} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default AuthenticatedRoutes;
