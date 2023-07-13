import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const ExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  const startAddExpense = () => {
    setIsEditing(true);
  };
  const stopAddExpense = () => {
    setIsEditing(false);
  };

  return (
    <div className=" new-expense">
      {!isEditing && <button onClick={startAddExpense}>Add Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenses={ExpenseDataHandler}
          onCancel={stopAddExpense}
        />
      )}
    </div>
  );
};
export default NewExpenses;
