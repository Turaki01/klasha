import React from "react";

import LineChart from "components/LineChart";
const DashboardChart = () => {
  const labels = ["20 Aug", "21 Aug", "22 Aug", "23 Aug", "24 Aug", "25 Aug"];
  const data = [1500, 2100, 2100, 1900, 2800, 1900];

  return (
    <div className="mb-10">
      <div className="border border-solid border-[#000000] rounded-[8px] px-[25px] md:h-[23rem] h-[10rem] md:mt-0 mt-10">
        <LineChart labels={labels} data={data} borderYGrid={false} />
      </div>
    </div>
  );
};

export default DashboardChart;
