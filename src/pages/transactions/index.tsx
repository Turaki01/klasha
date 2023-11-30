import Button from "components/Button";
import Card from "components/Card";
import Pagination from "components/Pagination";
import SearchInput from "components/Search";
import TableComponent from "components/TableComponent";
import { PaginationOnChange } from "interfaces/util-interface";
import React from "react";
import { BsFilter } from "react-icons/bs";
import { transactionHistory } from "utils/constant";

const Transactions = () => {
  const [page, setPage] = React.useState<number>(1);

  const handlePaginationChange = (e: PaginationOnChange) => {
    setPage(e.selected);
  };

  return (
    <div className="mx-8 mt-[4rem]">
      <div className="border border-solid border-[#F0F0F0] rounded-[8px]">
        <div className="border-b border-solid border-[#F0F0F0] h-[60px] p-3">
          <h3 className="text-[#0A0A0A] text-[18px]">Transaction history</h3>
        </div>
        <div className="border-b border-solid border-[#F0F0F0] md:h-[52px] px-3 md:flex items-center justify-between">
          <div className="md:my-0 my-6">
            <SearchInput />
          </div>
          <div className="flex md:justify-start justify-end md:mb-0 mb-5">
            <div
              data-testid="txnFilter"
              className="mr-3 border border-solid border-[#0A0A0A] rounded-[8px] px-4 flex items-center font-[500] cursor-pointer"
            >
              <span className="text-[13px] mr-1">Filter</span>
              <BsFilter size={18} />
            </div>
            <Button
              label="Export"
              bgColor="#ffffff"
              borderColor="#0A0A0A"
              color="#0A0A0A"
              fontSize={13}
              height={38}
              paddingX={1}
            />
          </div>
        </div>

        <div className="py-6">
          <div className="lg:block hidden">
            <TableComponent>
              <thead className="table__thead">
                <tr className="table__head">
                  <th className="table__th">Transaction Id</th>
                  <th className="table__th">Source</th>
                  <th className="table__th">Customer name</th>
                  <th className="table__th">Customer email</th>
                  <th className="table__th">Amount</th>
                  <th className="table__th">Request date</th>
                  <th className="table__th">Status</th>
                </tr>
              </thead>

              <tbody className="table__tbody">
                {transactionHistory.map((transaction, index) => (
                  <tr
                    key={transaction.transactionId + index}
                    className="table__tr"
                  >
                    <td className="table__td">{transaction.transactionId}</td>
                    <td className="table__td">{transaction.source}</td>
                    <td className="table__td">{transaction.customerName}</td>
                    <td className="table__td">{transaction.customerEmail}</td>
                    <td className="table__td">{transaction.amount}</td>
                    <td className="table__td">{transaction.requestDate}</td>
                    <td className="table__td">{transaction.status}</td>
                  </tr>
                ))}
              </tbody>
            </TableComponent>
          </div>

          <div className="block md:grid grid-cols-2 gap-8 lg:hidden p-5">
            {transactionHistory.map((transaction, index) => (
              <Card
                key={transaction.transactionId + index}
                paddingX={20}
                paddingY={20}
                isHover={false}
                height={23}
              >
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div>
                    <h3 className="text-[#5F5F5F] text-[16px] leading-[24px] font-[600] mb-1">
                      Txn ID
                    </h3>
                    <p className="text-[#484848] text-[15px]">
                      {transaction.transactionId}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div>
                    <h3 className="text-[#5F5F5F] text-[16px] leading-[24px] font-[600] mb-1">
                      Customer name
                    </h3>
                    <p className="text-[#484848] text-[15px]">
                      {transaction.customerName}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#5F5F5F] text-[16px] leading-[24px] font-[600] mb-1">
                      Customer email
                    </h3>
                    <p className="text-[#484848] text-[15px]">
                      {transaction.customerEmail}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div>
                    <h3 className="text-[#5F5F5F] text-[16px] leading-[24px] font-[600] mb-1">
                      Amount
                    </h3>
                    <p className="text-[#484848] text-[15px]">
                      {transaction.amount}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#5F5F5F] text-[16px] leading-[24px] font-[600] mb-1">
                      Request date
                    </h3>
                    <p className="text-[#484848] text-[15px]">
                      {transaction.requestDate}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div>
                    <h3 className="text-[#5F5F5F] text-[16px] leading-[24px] font-[600] mb-1">
                      Source
                    </h3>
                    <p className="text-[#484848] text-[15px]">
                      {transaction.source}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[#5F5F5F] text-[16px] leading-[24px] font-[600] mb-1">
                      Status
                    </h3>
                    <p className="text-[#484848] text-[15px]">
                      {transaction.status}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-4 flex justify-end px-4 border border-solid border-[#F0F0F0] rounded-[8px] md:w-fit md:ml-auto md:mx-4 mx-[10px] h-[40px] items-center">
            <Pagination
              currentPage={page}
              pageCount={20}
              handlePaginationChange={handlePaginationChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
