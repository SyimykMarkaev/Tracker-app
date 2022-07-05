import React, { createContext, useEffect, useState } from "react";

const localStorageTransactions = JSON.parse(
  localStorage.getItem("transactions")
);

const initialTransactions = localStorageTransactions || [];

// Create context
export const GlobalContext = createContext();

// Provider component
export const GlobalProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(initialTransactions);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    // console.log("adding new transaction", transaction);
    const newTransactions = transactions.map((t) => {
      return { ...t };
    });
    newTransactions.push(transaction);
    // localStorage.setItem("transactions", JSON.stringify(newTransactions));
    setTransactions(newTransactions);
  };

  const deleteTransaction = (id) => {
    const newTransactions = transactions.filter((t) => t.id !== id);
    // localStorage.setItem("transactions", JSON.stringify(newTransactions));
    setTransactions(newTransactions);
  };

  return (
    <GlobalContext.Provider
      value={{ transactions, deleteTransaction, addTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
