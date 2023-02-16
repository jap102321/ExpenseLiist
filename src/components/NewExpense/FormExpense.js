import { useState } from 'react';
import './FormExpense.css';

const FormExpense = (props)=>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [onForm, setOnForm] = useState(true)

    const titleInputHandler = (e)=>{
        setEnteredTitle(e.target.value);
    };

    const amountInputHandler = (e)=>{
        setEnteredAmount(e.target.value);
    }

    const dateInputHandler = (e) =>{
        setEnteredDate(e.target.value);
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        const expenseData={
            title : enteredTitle,
            amount : +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        props.onFormHandling(onForm)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    const onFormClick = ()=>{
        setOnForm(false);
        props.onFormHandling(onForm)
    }


    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__control'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" 
                    value={enteredTitle} 
                    onChange={titleInputHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01"
                    value={enteredAmount} 
                    onChange={amountInputHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2022-12-12" max="2023-12-12" 
                    value={enteredDate}
                    onChange={dateInputHandler} />
                </div>
                <div className='new-expense__actions'>
                    <button onClick={onFormClick}>Cancel</button>
                    <button type='submit'> Add Expense</button>
                </div>
            </div>
        </form>
        
    )

}

export default FormExpense;


