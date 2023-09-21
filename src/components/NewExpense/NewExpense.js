import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    setIsEditing(false);

  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancle={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;


// child-to-parent data transfer 
// 1st step need to create function in parent and call in child component so function pass in child comp
// 2nd step is to call parent component function in child using props and pass data of child in function and we 
// will use that child data in parent comp