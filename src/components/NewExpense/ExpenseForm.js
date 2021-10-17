import React, {useState} from "react";

import './ExpenseForm.css';

const ExpenseForm= (props) => {
   
    let [enteredTitle,setEnteredTitle]= useState('');
    let [enteredAmount,setEnteredAmount]= useState('');
    let [enteredDate,setEnteredDate]= useState('');
    // const [userInput,setUserInput]= useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:'',
    // });
    

    const titleChangeHunduler= (event) => {
        setEnteredTitle ( enteredTitle = event.target.value );

    //    setUserInput( (prevState) => {
    //        return{
    //        ...prevState,
    //        enteredTitle: event.target.value,}

    //    });
    }
     const amountChangeHunduler= (event) => {

        setEnteredAmount ( enteredAmount = event.target.value );
    //    setUserInput( (prevState) =>  {
    //        return{
    //        ...prevState,
    //        enteredAmount: event.target.value,}

    //    });
    }
     const dateChangeHunduler= (event) => {
        setEnteredDate ( enteredDate = event.target.value );
    //    setUserInput(  (prevState) => {
    //        return{
    //        ...prevState,
    //        enteredDate: event.target.value,}

    //    });
    }
    const submitHundluer= (event)=>{
        event.preventDefault();

        const expeseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)

            
        };

        console.log('form formjs');
        console.log(expeseData);
        props.onSaveExpenseData(expeseData);
       

        setEnteredTitle ('');
        setEnteredAmount ('');
        setEnteredDate ('');

       
        
    }
    
return(
    <form onSubmit={submitHundluer}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label> Title</label>
                <input type="text" value={enteredTitle} onChange= {titleChangeHunduler} />
            </div>

            <div className="new-expense__control">
                <label> Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange= {amountChangeHunduler} />
            </div>
            
            <div className="new-expense__control">
                <label> Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange= {dateChangeHunduler}/>
            </div>
            
            
        </div>
        <div className="new-expense__actions">
                <button type="submit" >Add Expense</button>
            </div>
    </form>
)};
export default ExpenseForm;