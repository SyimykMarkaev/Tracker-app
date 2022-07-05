import React, { useContext, useState } from "react";
import { GlobalContext } from "../context-api/GlobalState";
// import { v4 as uuidv4 } from "uuid";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const generateId = () => {
    return Math.floor(Math.random() * 1000000000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "" || Number(amount) === 0) {
      alert("Please add a text and amount");
    } else {
      const newTransaction = {
        id: generateId(),
        text,
        amount: +amount
      };
      // const newTransaction = {
      //   id: uuidv4(),
      //   text,
      //   amount: +amount
      // };

      addTransaction(newTransaction);
      setText("");
      setAmount(0);
    }
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
