import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("all");
  const onExpenseFilterChange = (changedYear) => {
    setFilterYear(changedYear);
    console.log(changedYear);
  };
  return (
    <div className="expenses">
      <ExpensesFilter onChangeFilter={onExpenseFilterChange} />
      {props.expenses.map((item) => {
        if (item.date.getFullYear() == filterYear || filterYear === "all") {
          return (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        }
      })}
    </div>
  );
}

export default Expenses;
