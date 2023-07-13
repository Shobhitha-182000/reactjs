import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.item.length === 0) {
    return (
      <h2 className="expenses-list__fallback" style={{ color: "black" }}>
        Found No Expense
      </h2>
    );
  }else if(props.item.length===1){
    return (
        <ul className="expenses-list">
        {props.item.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            location={expense.location}
            date={expense.date}
          />
        ))}
        <h4 className="expenses-list__fallback" style={{ color: "black" }}>
        "Only single Expense here. Please add more..."
      </h4>
      </ul>
    );
  }
  return (
    <ul className="expenses-list">
      {props.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          location={expense.location}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;
