import React, { useState } from "react";

import ExpenseItem from "./expense-item.component";
import Card from "../UI/card.compeonent";
import ExpensesFilter from "./expense-filter.component";
import "./expenses.styles.css";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {items.map(({ title, amount, date }) => (
          <ExpenseItem title={title} amount={amount} date={date} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
