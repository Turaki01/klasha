import { TransactionTableInterface } from "interfaces/transaction";
import {
  DayObjectInterface,
  DropdownInterface
} from "interfaces/util-interface";

export const listOfDays: DayObjectInterface[] = [
  {
    name: "7 days",
    value: "7"
  },
  {
    name: "30 days",
    value: "30"
  }
];

export const currencyList: DropdownInterface[] = [
  {
    name: "USD",
    value: "USD"
  },
  {
    name: "NGN",
    value: "NGN"
  },
  {
    name: "GDP",
    value: "GDP"
  }
];

export const emailSampleDropdown: DropdownInterface[] = [
  {
    name: "elchocho@yopmail.com",
    value: "elchocho@yopmail.com"
  },
  {
    name: "el-samar@yopmail.com",
    value: "el-samar@yopmail.com"
  },
  {
    name: "john.doe@yopmail.com",
    value: "john.doe@yopmail.com"
  }
];

export const transactionHistory: TransactionTableInterface[] = [
  {
    transactionId: "GB124QWERTY12346",
    source: "GTB",
    customerName: "Mike Owen",
    customerEmail: "0223337281",
    amount: "$230.00",
    requestDate: "24.08.2021",
    status: "Pending"
  },
  {
    transactionId: "GB124QWERTY12346",
    source: "UBA",
    customerName: "Steve O'Shassy",
    customerEmail: "0982764829",
    amount: "$480.00",
    requestDate: "22.08.2021",
    status: "Successful"
  },
  {
    transactionId: "GB124QWERTY12346",
    source: "GTB",
    customerName: "Mike Owen",
    customerEmail: "0223337281",
    amount: "$230.00",
    requestDate: "24.08.2021",
    status: "Pending"
  },
  {
    transactionId: "GB124QWERTY12346",
    source: "GTB",
    customerName: "Mike Owen",
    customerEmail: "0223337281",
    amount: "$230.00",
    requestDate: "24.08.2021",
    status: "Pending"
  }
];
