import React, { useContext } from "react";
import { GlobalContext } from "../context-api/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  // [300, -400, 12000]
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => acc + item, 0); // [300, 1200], 1800

  const expense =
    amounts
      .filter((amount) => amount < 0)
      .reduce((acc, item) => acc + item, 0) * -1; // [-200, -500], -2000

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
};
