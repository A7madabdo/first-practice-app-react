import './Expenses.css';
import ExpeseItem from './ExpeseItem';
import Card from '../Ui/Card';

const Expenses = (props) =>{
  return(
      <Card className="expenses">
         <ExpeseItem title = {props.items[0].title} amount = {props.items[0].amount} date = {props.items[0].date}></ExpeseItem>
        <ExpeseItem title = {props.items[1].title} amount = {props.items[1].amount} date = {props.items[1].date}></ExpeseItem>
        <ExpeseItem title = {props.items[2].title} amount = {props.items[2].amount} date = {props.items[2].date}></ExpeseItem>
        <ExpeseItem title = {props.items[3].title} amount = {props.items[3].amount} date = {props.items[3].date}></ExpeseItem>

      </Card>
  );

    
}

export default Expenses;