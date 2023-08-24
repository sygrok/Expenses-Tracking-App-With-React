import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("Show All");

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

  let expensesContent = <p>NO DATA FOUND!</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        id={expense.id}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/*x = items & x.title = items.title */
        /*expense can be named whatever we want in this case*/}

        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
