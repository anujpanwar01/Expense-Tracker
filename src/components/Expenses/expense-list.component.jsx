import "./expense-list.styles.css";

import ExpenseItem from "./expense-item.component";

const ExpenseList = ({ filterExpenseItem }) => {
  if (filterExpenseItem.length === 0) {
    return <h2 className="expenses-list__fallback">No expense Item found</h2>;
  }

  return (
    <ul className="expenses-list">
      {filterExpenseItem.map(({ id, title, amount, date }) => {
        return (
          <ExpenseItem key={id} title={title} amount={amount} date={date} />
        );
      })}
    </ul>
  );
};

export default ExpenseList;
