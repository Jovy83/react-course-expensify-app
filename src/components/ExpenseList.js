import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = (props) => (
  <div>
    {props.expenses.length === 0 ? (
      <p>No expenses</p>
    ) : (
      props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

// note: what we get from connect() is not the higher order component. it's actually like the function we created in the previous video.
// the first method, first param is where we provide the info about what we want to connect. we define a function that lets us determine what info from the store we want our component to be able to access. the store's state actually gets passed
export default connect(mapStateToProps)(ExpenseList);
