import "./ExpenseItem.css";

function ExpenseDetails(props) {
  const title = props.title;
  const amount = props.amount;
  const location = props.locationOfExpenditure;

  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <h6>{props.location}</h6>
      <div className="expense-item__price">{props.amount}</div>
    </div>
  );
}

export default ExpenseDetails;
