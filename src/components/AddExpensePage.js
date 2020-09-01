import React from "react";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    // props.dispatch(addExpense(expense));
    this.props.addExpense(expense);
    this.props.history.push("/"); // send user back to home page
  };

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addExpense: (expense) => dispatch(addExpense(expense)),
  };
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
