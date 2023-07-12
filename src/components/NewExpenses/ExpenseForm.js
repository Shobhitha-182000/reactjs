import './ExpenseForm.css';

const ExpenseForm = () => {
    const titleHandler=(event)=>{
        console.log(event.target.value);
    }
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__controls'>
          <label>Title</label>
          <input type="text" onChange={titleHandler}/>
        </div>
        <div className='new-expense__controls'>
          <label>Date</label>
          <input type="date" min="2021-07-18" max="2023-07-18" onChange={titleHandler} />
        </div>
        <div className='new-expense__controls'>
          <label>Amount</label>
          <input type="number" min="0.01" onChange={titleHandler}/>
        </div>
        <div className='new-expense__controls'>
          <label>location</label>
          <input type="text"onChange={titleHandler} />
        </div>
        <div className='new-expense__actions'> 
        <button type="submit" >Add Expense</button></div>
      </div>
    </form>
  );
};
export default ExpenseForm;
