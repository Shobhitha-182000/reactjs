import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";

 import NewExpenses from "./components/NewExpenses/NewExpenses";

function App(props) {
  return (
    <div className="App">
      <h1>Let's get</h1>
      <NewExpenses/>
      <Expenses item={props.Expenses}/>
      
     </div>
  );
}

export default App;
