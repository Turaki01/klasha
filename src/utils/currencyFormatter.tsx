import React from "react";
import isEmpty from "lodash.isempty";

function naira(number: string) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN"
  }).format(Number(number));
}

function thousandFormat(amountText: string) {
  let formatted;

  if (
    !isEmpty(amountText) &&
    amountText[0] === "0" &&
    amountText.length === 1
  ) {
    return (formatted = amountText);
  } else if (!isEmpty(amountText) && amountText[0] === "0") {
    formatted = amountText
      .toString()
      .replace(/^0/, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    formatted = amountText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return formatted;
}

function nairaFormat(number: string): { naira: string; kobo: string } {
  const value = Number(number).toFixed(2);
  const [naira, kobo] = value.split(".");

  return { naira: thousandFormat(naira), kobo: `.${kobo}` };
}

function NairaFormatter({ amount }: { amount: string | undefined }) {
  return (
    <div>
      ₦{nairaFormat(amount || "0").naira}
      {nairaFormat(amount || "0").kobo}
    </div>
  );
}

export { naira, NairaFormatter };
