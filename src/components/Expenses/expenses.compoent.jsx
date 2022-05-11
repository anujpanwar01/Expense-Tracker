import React, { useState } from "react";
import ExpenseList from "./expense-list.component";

import Card from "../UI/card.compeonent";
import ExpensesFilter from "./expense-filter.component";
import "./expenses.styles.css";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpenseItems = (item) => {
    //convert the date to this format 2022-05-12
    // date is an obj so why i use the stringify

    ////////////////////////////////////////
    /* 
           //  method  1
            const year = JSON.stringify(new Date(item.date))
              .split("-")
              .at(0)
              .slice(1);

            return year === filteredYear;
            */
    return item.filter(
      (item) => item.date.getFullYear().toString() === filteredYear
    );
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseList filterExpenseItem={filterExpenseItems(items)} />
      </Card>
    </div>
  );
};

export default Expenses;
