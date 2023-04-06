import React, { useState } from 'react';
import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initial_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 400,
    date: new Date(2020, 7, 14),
    locationOfExpenditure: "Department Store",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 45000,
    date: new Date(2021, 2, 12),
    locationOfExpenditure: "Electronic Store",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 10000,
    date: new Date(2021, 2, 28),
    locationOfExpenditure: "Policy Office",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 8500,
    date: new Date(2021, 5, 12),
    locationOfExpenditure: "Furniture Store",
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(initial_expenses)


  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <h1>Expense Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;



