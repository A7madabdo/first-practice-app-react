import "./ExpenseDate.css";

function ExpanseDate(props) {
    const month = props.date.toLocaleString('en-Us', {month:"long"});
    const day = props.date.toLocaleString('en-Us', {day:"2-digit"});
    const year = props.date.getFullYear();


    return (
        <div className="expense-date">
            <span className="expense-date__day">{day}</span>
            <span className="expense-date__month">{month}</span>
            <span className="expense-date__year">{year}</span>
        </div>
    );

}

export default ExpanseDate;