import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {

    const saveExpenseDataHundler = (enteredExpenseDate) =>{
        const newExpeseData = {
            ...enteredExpenseDate,
            id: Math.random().toString()
        };

        console.log('from newExpensejs');
        console.log(newExpeseData);

        props.onAddExpense(newExpeseData);

    }

    return (
    <div className="new-expense">
        <ExpenseForm  onSaveExpenseData= {saveExpenseDataHundler}/>
    </div>
    )
}

export default NewExpense;
