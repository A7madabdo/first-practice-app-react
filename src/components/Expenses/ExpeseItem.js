import React from "react";

import "./ExpenseItem.css";
import ExpeseDate from "./ExpenseDate";
import Card from "../Ui/Card";

const ExpenseItem = (props) => {

    return (
        <li>
            <Card className="expense-item"> 
                <div><ExpeseDate date={props.date} /></div>
                <div className="expense-item__description">
                    <h2 className="" >{props.title}</h2>
                    <span className="expense-item__price">${props.amount}</span>
                </div>
            </Card>
        </li>
    
    )
}

export default ExpenseItem;