import './ExpenseFilter.css';


const ExpenseFilter = (props) => {

    const dropDaownChangeHundler = (event) => {
        props.onChangeFilter(event.target.value);
    }



    return (
        <div className= "expeenses-filter">
            <div className= "expeenses-filter__control">
                <label htmlFor="selected"> Filter By Years </label>
                <select id="slected" value = {props.selected} onChange = {dropDaownChangeHundler}>
                    <option value= "2020">2020</option>
                    <option value= "2021">2021</option>
                    <option value= "2022">2022</option>
                    <option value= "2023">2023</option>
                   
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;
