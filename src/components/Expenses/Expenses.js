import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
const Expenses=(props)=>{
    
      const [filteredYear, setFilteredYear] = useState('2020');

      const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
      };
      const filteredExpenses=props.item.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredYear;
      })
    
      return (
        <div> 
        <Card className="expenses"> 
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseList item={filteredExpenses}/>

      </Card>
      </div>);
}
export default Expenses;