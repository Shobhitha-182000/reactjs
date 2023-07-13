import ExpenseForm from "./ExpenseForm";
import './NewExpenses.css';

const NewExpenses=(props)=>{
    const ExpenseDataHandler=(enterExpenseData)=>{
        const expenseData={
            ...enterExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }
    return (<div className=" new-expense">
        <ExpenseForm onSaveExpenses={ExpenseDataHandler}/>
    </div>);
}
export default NewExpenses;