import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 1, 12),
  },
  {
    id: "e5",
    title: "Book",
    amount: 5.5,
    date: new Date(2023, 1, 15),
  },
  {
    id: "e6",
    title: "Mobile Phone",
    amount: 999.99,
    date: new Date(2023, 4, 22),
  },
  {
    id: "e7",
    title: "Chair (Metal)",
    amount: 25.99,
    date: new Date(2023, 8, 10),
  },
  {
    id: "e8",
    title: "Wardrope",
    amount: 550.5,
    date: new Date(2023, 5, 15),
  },
  {
    id: "e9",
    title: "Door (Wooden)",
    amount: 200.5,
    date: new Date(2023, 2, 22),
  },
  {
    id: "e10",
    title: "Jacket",
    amount: 150,
    date: new Date(2023, 7, 10),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
