import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  console.log('props ---', props)
  const [filteredYear, setFilteredYear] = useState("2021");

  const dateFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("Expenses - selectedYear", selectedYear);
  };
 
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  

  return (
    <div>
      <Card className="expenses">
        {/* two-way binding in ExpensesFilter */}
        {/* ExpensesFilter is controlled comp and controlling by Expenses comp  */}
        <ExpensesFilter
          selected={filteredYear}
          onYearChangeFilter={dateFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
