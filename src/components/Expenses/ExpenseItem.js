import "./ExpenseItem.css";
import ExpensesDate from "./ExpensesDate";
import ExpenseDetails from "./ExpenseDetails";
import Expenses from "../Expenses/Expenses";
import Card from "../UI/Card";

const ExpenseItem=(props)=> {

  return (
    <Card className="expense-item">
       <ExpensesDate date={props.date}/>
       {/* <ExpenseDetails title={props.title} amount={props.amount} location={props.locationOfExpenditure}/> */}
      <div className="expense-item__description"><h2> {props.title}</h2></div>
      <div className="expense-item__description"><h2> {props.locationOfExpenditure}</h2></div>
      <div className="expense-item__price">${props.amount}</div>
    </Card>
  );
}
export default ExpenseItem;
