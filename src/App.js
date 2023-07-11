import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    LocationOfExpenditure:"Banglore",
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49,   LocationOfExpenditure:"Mysore", date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    LocationOfExpenditure:"HYD",
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    LocationOfExpenditure:"Banglore",
    date: new Date(2021, 5, 12),
  },
];

function App() {
  return (
    <div className="App">
      <h1>Let's get</h1>
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          locationOfExpenditure={expense.LocationOfExpenditure}
          date={expense.date}
        />
      ))}
      
     </div>
  );
}

export default App;
