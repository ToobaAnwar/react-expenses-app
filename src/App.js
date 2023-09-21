import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  { id: "e2", title: "New Books", amount: 94.88, date: new Date(2021, 3, 1) },
  {
    id: "e3",
    title: "Kitchen Accessories",
    amount: 200.5,
    date: new Date(2022, 3, 10),
  },
  {
    id: "e4",
    title: "Utility Bills",
    amount: 690.0,
    date: new Date(2021, 3, 15),
  },
];
const App = () => {
  const [expenses, setExpense] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log("expense", expense);
    setExpense((prevExpenses) => [...prevExpenses, expense]);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

// parent my function bnao r child component k tag my
//as a pointer call karo r chil comp ny props sy rcv kar parent ka function access r child sy data pass kar do
