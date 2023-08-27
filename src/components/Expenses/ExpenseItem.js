import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  {
    /*first element is the current state value and the second one is the function to update it*/
  }

  const clickHandler = () => {
    setTitle("Updated!");
    console.log("clicked");
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        {/*date={props.date} we can name 'date' whatever we want*/}
        <div className="expense-item__description">
          <h2>{title}</h2>
          {/*We can use title here other than props.title because we added key to each item.*/}
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;

//Props alternate
// import "./ExpenseItem.css";

// function ExpenseItem({ title, date, amount }) {
//   return (
//     <div className="expense-item">
//       <div>{date.toISOString()}</div>
//       <div className="expense-item__description">
//         <h2>{title}</h2>
//         <div className="expense-item__price">${amount}</div>
//       </div>
//     </div>
//   );
// }

// export default ExpenseItem;
