import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> No expenses found</h2>;
  }

  if (props.items.length === 1) {
    return (
      <ul className="expenses-list">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
            location={expense.locationOfExpenditure}
          />
        ))}
        <p className="expenses-list__fallback">Only single Expense here. Please add more..</p>
      </ul>
    );
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
          location={expense.locationOfExpenditure}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
