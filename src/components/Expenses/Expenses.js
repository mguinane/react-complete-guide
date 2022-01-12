import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState("2020");

  const yearFilterHandler = (year) => {
    setYearFilter(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={yearFilter}
          onSetYearFilter={yearFilterHandler}
        />
        {props.expenses.map((item) => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
