import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        location={expenses[0].locationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        location={expenses[1].locationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        location={expenses[2].locationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        location={expenses[3].locationOfExpenditure}
      ></ExpenseItem>
    </div>
  );
}

export default App;
