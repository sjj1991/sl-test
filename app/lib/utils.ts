export const formatCurrency = (amount: number) =>
  "S" +
  amount.toLocaleString("en-GB", {
    style: "currency",
    currency: "SGD",
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: 0,
  });
