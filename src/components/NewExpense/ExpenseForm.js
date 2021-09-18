import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setTitle] = useState("");
    const [enteredAmount, setAmount] = useState("");
    const [enteredDate, setDate] = useState("");

    const titleChangeHandler = (event) => {
      setTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
      setAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
      setDate(event.target.value);
    };

//   const [userInput, setUserInput] = useState({
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });

  const userInputSubmitHandler = (event) => {
      event.preventDefault();

      const expenseData = {
          title: enteredTitle,
          amount: enteredAmount,
          date: new Date(enteredDate),
      }
      console.log(expenseData);
      props.onSaveExpenseData(expenseData);

      setTitle('');
      setAmount('');
      setDate('');
  };

  return (
    <form onSubmit={userInputSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.1"
            step="0.1"
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
