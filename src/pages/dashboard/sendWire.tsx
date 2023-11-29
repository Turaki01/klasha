import Button from "components/Button";
import React from "react";
import "./style.scss";

const SendWire = () => {
  return (
    <div className="bg-[#EF2C5A] w-full h-[23rem] rounded-[8px] p-6 flex flex-col justify-between send-wire md:mb-0 mb-5">
      <div className="max-w-[13rem]">
        <p className="text-[#ffffff] text-[22px] leading-[32px] font-[500] general-san-medium">
          KlashaWire - send money to businesses globally from Africa
        </p>
      </div>
      <Button
        label="Send a Wire"
        border={8}
        bgColor="#000000"
        height={45}
        fontSize={14}
        paddingX={1}
      />
    </div>
  );
};

export default SendWire;
