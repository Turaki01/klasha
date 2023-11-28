import React from "react";
import "./styles.scss";
import { ReactComponent as Logo } from "assets/svg/k-logo.svg";

const FullpageLoader = () => {
  return (
    <div className="full-page-loader ">
      <div className="bounce">
        <Logo width={40} height={40} />
      </div>
    </div>
  );
};

export default FullpageLoader;
