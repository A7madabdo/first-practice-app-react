import React, {useState} from 'react';

import Card from '../Ui/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) =>{
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHunduler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  }
  
  const filteredExpense = props.items.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear ;
  });

 


  return(
      <Card className="expenses">
        <ExpenseFilter selected = {filteredYear} onChangeFilter={filterChangeHunduler} />
        <ExpensesList items= {filteredExpense} ></ExpensesList>
         
      </Card>
  );

    
}

export default Expenses;