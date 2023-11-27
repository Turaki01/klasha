import Card from "components/Card";
import React from "react";
import { NairaFormatter } from "utils/currencyFormatter";

const DashboardOverview = () => {
  return (
    <div className="mt-5 grid grid-cols-4 gap-4">
      <Card paddingX={20} paddingY={20}>
        <p className="font-[400] text-[14px] leading-[20px] mb-1">
          Today&apos;s sales
        </p>

        <h3 className="text-[20px] leading-[32px]">
          <NairaFormatter amount={"1652.50"} />
        </h3>
      </Card>
      <Card paddingX={20} paddingY={20}>
        <div className="flex flex-col justify-between h-full">
          <p className="font-[400] text-[14px] leading-[20px] mb-1">
            24 Aug - 01 Sep 21
          </p>

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

      <Card paddingX={20} paddingY={20}>
        <div className="flex flex-col justify-between h-full">
          <p className="font-[400] text-[14px] leading-[20px] mb-1">
            24 Aug - 01 Sep 21
          </p>

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

      <Card paddingX={20} paddingY={20}>
        <div className="flex flex-col justify-between h-full">
          <p className="font-[400] text-[14px] leading-[20px] mb-1">
            24 Aug - 01 Sep 21
          </p>

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
