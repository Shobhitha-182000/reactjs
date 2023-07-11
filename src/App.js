import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";

 

function App(props) {
  return (
    <div className="App">
      <h1>Let's get</h1>
      <Expenses item={props.Expenses}/>
      
     </div>
  );
}

export default App;
