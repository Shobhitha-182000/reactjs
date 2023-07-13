import React,{useState} from "react";
import "./ExpenseItem.css";
import ExpensesDate from "./ExpensesDate";
import ExpenseDetails from "./ExpenseDetails";
import Expenses from "../Expenses/Expenses";
import Card from "../UI/Card";

const ExpenseItem=(props)=> {
  const [currentTitle,setTitle]=useState(props.title);
  const[amount,setAmount]=useState(props.amount);
  const ClickHandler=()=>{
    setTitle("updated");
    setAmount("$100");
    console.log("clicked");
  }
   
  return (
    <Card className="expense-item" >
       <ExpensesDate date={props.date}/>
       {/* <ExpenseDetails title={props.title} amount={props.amount} location={props.locationOfExpenditure}/> */}
      <div className="expense-item__description" ><h2> {currentTitle}</h2></div>
      <div className="expense-item__description"><h2> {props.location}</h2></div>
      <div className="expense-item__price">${amount}</div>
       
      {/* <button onClick={ClickHandler}>update</button> */}
      
    </Card>
  );
}
export default ExpenseItem;
