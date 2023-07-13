import React,{useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enterTitle,setEnterTitle]=useState('');
    const [enterAmount,setEnterAmount]=useState('');
    const [enterLocation,setEnterLocation]=useState('');
    const [enterDate,setEnterDate]=useState('');
    // const [enterInput,setInput]=useState({
    //     enterTitle:'',
    //     enterAmount:'',
    //     enterLocation:'',
    //     enterDate:''
    // })
    const titleHandler=(event)=>{
        setEnterTitle(event.target.value);
        //  setInput({
        //     ...enterInput,
        //     enterTitle:event.target.value
        //  })
        //it is a gud way because whenevre update more values in new version helpfull
        // setInput((previouseState)=>{
        //   return {...previouseState,
        //     enterTitle:event.target.value}
        // })
    }
    const amountHandler=(event)=>{
        setEnterAmount(event.target.value);
        // setInput({
        //     ...enterInput,
        //     enterAmount:event.target.value
        //  })
    }
    const locationHandler=(event)=>{
        setEnterLocation(event.target.value);
        // setInput({
        //     ...enterInput,
        //     enterLocation:event.target.value
        //  })
    }
    const dateHandler=(event)=>{
        setEnterDate(event.target.value);
        // setInput({
        //     ...enterInput,
        //     enterDate:event.target.value
        //  })
    }
    const submitHandler=(event)=>{
      event.preventDefault();
        const expenseData={
            title:enterTitle,
            amount:enterAmount,
            location:enterLocation,
            date:new Date(enterDate)
        }
        props.onSaveExpenses(expenseData);
        setEnterTitle('');
        setEnterAmount('');
        setEnterLocation('');
        setEnterDate('');
    }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__controls'>
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={titleHandler}/>
        </div>
        <div className='new-expense__controls'>
          <label>Date</label>
          <input type="date" min="2021-07-18" max="2023-07-18" value={enterDate} onChange={dateHandler} />
        </div>
        <div className='new-expense__controls'>
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enterAmount} onChange={amountHandler}/>
        </div>
        <div className='new-expense__controls'>
          <label>location</label>
          <input type="text"  value={enterLocation} onChange={locationHandler} />
        </div>
        <div className='new-expense__actions'> 
        <button type="submit" >Add Expense</button></div>
      </div>
    </form>
  );
};
export default ExpenseForm;
