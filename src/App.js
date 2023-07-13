import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";

import NewExpenses from "./components/NewExpenses/NewExpenses";

const DUMMY = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    location: "Banglore",
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    location: "Mysore",
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    location: "HYD",
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    location: "Banglore",
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [enterExpenseData, setExpenseData] = useState(DUMMY);
  const AddExpensesHandler = (expense) => {
    setExpenseData((previousExpenase) => {
      return [expense, ...previousExpenase];
    });
  };
  return (
    <div className="App">
      <h1>Let's get</h1>
      <NewExpenses onAddExpense={AddExpensesHandler} />
      {/* <Expenses item={props.Expenses}/> */}
      <Expenses item={enterExpenseData} />
    </div>
  );
}

export default App;
