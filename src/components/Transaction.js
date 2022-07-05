import React, { useContext } from "react";
import { GlobalContext } from "../context-api/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const { id, text, amount } = transaction;

  const customClass = amount < 0 ? "minus" : "plus";

  return (
    <li className={customClass}>
      {text} <span>{amount}</span>
      <button className="delete-btn" onClick={() => deleteTransaction(id)}>
        x
      </button>
    </li>
  );
};
