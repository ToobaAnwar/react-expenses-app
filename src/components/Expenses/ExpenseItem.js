import React, {useState} from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    
    // managed by React
    // by using useState the React will call this component again and re-evaluate jsx code again 
    // and every state manage independently by react
    const[title, setTitle] = useState(props.title);
    console.log('Expense Item evaluated by React');
    const clickHandler = () => {
      setTitle('Updated!!');
      console.log(title);
    }
   
  return (
    <li>
    <Card className='expense-item'>
      {/*  all this will be shown in Card by using props.children  */}
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{ props.title }</h2>
        <div className='expense-item__price'>${ props.amount }</div>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;
