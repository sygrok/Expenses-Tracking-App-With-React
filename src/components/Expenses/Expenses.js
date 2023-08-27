import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  //filtering
  const filteredExpenses = props.items.filter((expense) => {
    if (filteredYear !== "Show All") {
      return expense.date.getFullYear().toString() === filteredYear;
    } else {
      return true;
    }
  });

  let check = true;

  if (filteredYear === "Show All") {
    check = false;
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onCheck={check}
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/*x = items & x.title = items.title */
        /*expense can be named whatever we want in this case*/}
        {check && <ExpensesChart expenses={filteredExpenses} />}
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
