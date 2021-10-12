import "./ExpenseItem.css";
import ExpeseDate from "./ExpenseDate";

function ExpeseItem(props) {




    return (
    <div className="expense-item"> 
        <div><ExpeseDate date= {props.date} /></div>
        <div className="expense-item__description">
            <h2 className="" >{props.title}</h2>
            <span className="expense-item__price">${props.amount}</span>
        </div>
    </div>
    
    )
}

export default ExpeseItem;