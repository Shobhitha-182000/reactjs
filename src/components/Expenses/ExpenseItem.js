import "./ExpenseItem.css";
import ExpensesDate from "./ExpensesDate";
import ExpenseDetails from "./ExpenseDetails";
import Expenses from "../Expenses/Expenses";
import Card from "../UI/Card";

const ExpenseItem=(props)=> {
  const ClickHandler=()=>{
    alert("Clicked");
  }
  const deleteBtn = () => {
     props.onDelete(props.id);
  };
  return (
    <Card className="expense-item" id={props.id}>
       <ExpensesDate date={props.date}/>
       {/* <ExpenseDetails title={props.title} amount={props.amount} location={props.locationOfExpenditure}/> */}
      <div className="expense-item__description" ><h2> {props.title}</h2></div>
      <div className="expense-item__description"><h2> {props.locationOfExpenditure}</h2></div>
      <div className="expense-item__price">${props.amount}</div>
      {/* <button onClick={ClickHandler}>Click here</button> */}
      <button onClick={deleteBtn}>Delete Expense</button>
    </Card>
  );
}
export default ExpenseItem;
