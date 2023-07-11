import "./ExpenseItem.css";
import ExpensesDate from "./ExpensesDate";
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItem(props) {

  return (
    <div className="expense-item">
       <ExpensesDate date={props.date}/>
       <ExpenseDetails title={props.title} amount={props.amount} location={props.locationOfExpenditure}/>
      {/* <div className="expense-item__description"><h2> {props.title}</h2></div>
      <div className="expense-item__description"><h2> {props.locationOfExpenditure}</h2></div>
      <div className="expense-item__price">${props.amount}</div> */}
    </div>
  );
}
export default ExpenseItem;
