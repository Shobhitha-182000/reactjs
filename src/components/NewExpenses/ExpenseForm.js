import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enterTitle,setEnterTitle]=useState('');
    const [enterAmount,setEnterAmount]=useState('');
    const [enterLocation,setEnterLocation]=useState('');
    const [enterDate,setEnterDate]=useState('');
    const titleHandler=(event)=>{
        setEnterTitle(event.target.value);
    }
    const amountHandler=(event)=>{
         setEnterAmount(event.target.value);
    }
    const locationHandler=(event)=>{
         setEnterLocation(event.target.value);
    }
    const dateHandler=(event)=>{
        setEnterDate(event.target.value);
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
          <input type="date" min="2021-07-18" max="2023-07-18" onChange={dateHandler} />
        </div>
        <div className='new-expense__controls'>
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountHandler}/>
        </div>
        <div className='new-expense__controls'>
          <label>location</label>
          <input type="text"onChange={locationHandler} />
        </div>
        <div className='new-expense__actions'> 
        <button type="submit" >Add Expense</button></div>
      </div>
    </form>
  );
};
export default ExpenseForm;
