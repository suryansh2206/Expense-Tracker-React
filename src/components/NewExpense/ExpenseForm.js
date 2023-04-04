import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const ChangeHandler = (event) => {
        console.log(event.target.value)
    };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new_expense__control">
          <label>Title</label>
          <input type="text" onChange={ChangeHandler}/>
        </div>
        <div className="new_expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={ChangeHandler}/>
        </div>
        <div className="new_expense__control">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2023-12-31" onChange={ChangeHandler}/>
        </div>
        <div className="new_expense__control">
          <label>Location</label>
          <input type="text" onChange={ChangeHandler}/>
        </div>
      </div>
      <div className="new_expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
