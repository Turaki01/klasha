import Card from "components/Card";
import LineChart from "components/LineChart";
import React from "react";
import { NairaFormatter } from "utils/currencyFormatter";

const DashboardOverview = () => {
  const labels = ["20 Aug", "21 Aug", "22 Aug", "23 Aug", "24 Aug", "25 Aug"];
  const weeklyData = [1500, 2100, 2100, 1900, 2800, 1900];
  const monthlyData = [1100, 1800, 2100, 1100, 2800, 1100];
  const yearlyData = [900, 1800, 5000, 1200, 2800, 3000];

  return (
    <div className="mt-5 md:grid grid-cols-4 gap-4">
      <Card height={16} paddingX={20} paddingY={20}>
        <p className="font-[400] text-[14px] leading-[20px] mb-1">
          Today&apos;s sales
        </p>

        <h3 className="text-[20px] leading-[32px]">
          <NairaFormatter amount={"1652.50"} />
        </h3>
      </Card>
      <Card height={16} paddingX={20} paddingY={20}>
        <div className="flex flex-col justify-between h-full">
          <p className="font-[400] text-[14px] leading-[20px]">
            24 Aug - 01 Sep 21
          </p>

          <LineChart
            displayYGrid={false}
            tickXGrid={false}
            tickYGrid={false}
            borderXGrid={false}
            borderYGrid={false}
            labels={labels}
            data={weeklyData}
          />

          <div>
            <p className="font-[400] text-[14px] leading-[20px] mb-1">
              This week
            </p>

            <h3 className="text-[20px] leading-[32px]">
              <NairaFormatter amount={"1652.50"} />
            </h3>
          </div>
        </div>
      </Card>

      <Card height={16} paddingX={20} paddingY={20}>
        <div className="flex flex-col justify-between h-full">
          <p className="font-[400] text-[14px] leading-[20px]">
            24 Aug - 01 Sep 21
          </p>

          <LineChart
            displayYGrid={false}
            tickXGrid={false}
            tickYGrid={false}
            borderXGrid={false}
            borderYGrid={false}
            labels={labels}
            data={monthlyData}
          />

          <div>
            <p className="font-[400] text-[14px] leading-[20px] mb-1">
              This month
            </p>

            <h3 className="text-[20px] leading-[32px]">
              <NairaFormatter amount={"1652.50"} />
            </h3>
          </div>
        </div>
      </Card>

      <Card height={16} paddingX={20} paddingY={20}>
        <div className="flex flex-col justify-between h-full">
          <p className="font-[400] text-[14px] leading-[20px]">
            24 Aug - 01 Sep 21
          </p>

          <LineChart
            displayYGrid={false}
            tickXGrid={false}
            tickYGrid={false}
            borderXGrid={false}
            borderYGrid={false}
            labels={labels}
            data={yearlyData}
          />

          <div>
            <p className="font-[400] text-[14px] leading-[20px] mb-1">
              Last month
            </p>

            <h3 className="text-[20px] leading-[32px]">
              <NairaFormatter amount={"1652.50"} />
            </h3>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DashboardOverview;
