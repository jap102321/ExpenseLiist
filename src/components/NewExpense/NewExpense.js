import React, {useState} from 'react';
import FormExpense from './FormExpense';
import './NewExpense.css';

const NewExpense = (props) =>{
    const [onAddNewExpense, setAddingExpense]= useState(false)

    const expenseDataRec = (expenseDataInfo) =>{
        const expenseData={
            ...expenseDataInfo,
            id: Math.random().toString()
        };
        props.onSaveExpense(expenseData)
    }

    const addExpense = ()=>{
        setAddingExpense(true)
    }

    const submitHandling= (submitCancelData) =>{
       setAddingExpense({
        ...submitCancelData,
        onAddExpense : submitCancelData
       })
    }

    let onAddExpense = <button onClick={addExpense}>Add New Expense!</button>
    
    if(onAddNewExpense === true){
        onAddExpense= 
            <FormExpense onFormHandling={submitHandling} 
            onSaveExpenseData={expenseDataRec}/>
    }
    else{
        onAddExpense=
         <button onClick={addExpense}>Add New Expense!</button>
    }

    return(
        <div className='new-expense'>
            {onAddExpense}
        </div>
    )

}

export default NewExpense;