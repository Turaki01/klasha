import React from "react";

import LineChart from "components/LineChart";
import Card from "components/Card";
const DashboardChart = () => {
  const labels = ["20 Aug", "21 Aug", "22 Aug", "23 Aug", "24 Aug", "25 Aug"];
  const data = [1500, 2100, 2100, 1900, 2800, 1900];

  return (
    <div className="mb-10">
      <Card isHover={false} height={23} paddingX={25} paddingY={0}>
        <LineChart labels={labels} data={data} borderYGrid={false} />
      </Card>
    </div>
  );
};

export default DashboardChart;
