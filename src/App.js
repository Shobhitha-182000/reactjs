import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";

 import NewExpenses from "./components/NewExpenses/NewExpenses";

function App(props) {
  
  const AddExpensesHandler=expense=>{
    console.log('in app.js ');
    console.log(expense);
  }
  return (
    <div className="App">
      <h1>Let's get</h1>
      <NewExpenses onAddExpense={AddExpensesHandler}/>
      <Expenses item={props.Expenses}/>
      {/* <Expenses item={expenses}/> */}
      
     </div>
  );
}

export default App;
