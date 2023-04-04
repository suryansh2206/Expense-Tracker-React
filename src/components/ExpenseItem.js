import React, {useState} from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from './Card'

const ExpenseItem = (props) => {

    const [amount, setAmount] = useState(props.amount);

    const clickHandler = () => {
        setAmount('100$')
    }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={amount}
        location={props.location}
        title={props.title}
      />
      <button onClick={clickHandler}>Change Amount</button>
    </Card>
  );
}
export default ExpenseItem;