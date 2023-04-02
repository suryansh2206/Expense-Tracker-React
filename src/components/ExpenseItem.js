import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2023, 4, 1);
    const expenseTitle = 'Car Servicing';
    const expenseAmount = 15000;
    const locationOfExpenditure = 'Garage';

    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>Food</h2>
                <h6>Canteen</h6>
                <div className='expense-item__price'>10rs</div>
            </div>
            <div className="expense-item__description">
                <h2>Petrol</h2>
                <h6>Petrol Pump</h6>
                <div className='expense-item__price'>100rs</div>
            </div>
            <div className="expense-item__description">
                <h2>Movies</h2>
                <h6>PVR</h6>
                <div className='expense-item__price'>200rs</div>
            </div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <h6>{locationOfExpenditure}</h6>
                <div className='expense-item__price'>{expenseAmount}</div>
            </div>
        </div>
    );
}
export default ExpenseItem;