import Button from "components/Button";
import SearchInput from "components/Search";
import TableComponent from "components/TableComponent";
import React from "react";
import { BsFilter } from "react-icons/bs";
import { transactionHistory } from "utils/constant";

const Transactions = () => {
  return (
    <div className="mx-8 mt-[4rem]">
      <div className="border border-solid border-[#F0F0F0] rounded-[8px]">
        <div className="border-b border-solid border-[#F0F0F0] h-[60px] p-3">
          <h3 className="text-[#0A0A0A] text-[18px]">Transaction history</h3>
        </div>
        <div className="border-b border-solid border-[#F0F0F0] h-[52px] px-3 flex items-center justify-between">
          <div>
            <SearchInput />
          </div>
          <div className="flex">
            <div className="mr-3 border border-solid border-[#0A0A0A] rounded-[8px] px-4 flex items-center font-[500] cursor-pointer">
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
      </div>
    </div>
  );
};

export default Transactions;
