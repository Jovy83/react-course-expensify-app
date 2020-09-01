import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };

  onRemove = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  // we have access to the props with the 2nd argument. these are the props that were passed into the HOC
  // in short, react-router renders our HOC, the HOC passes the props through and also allows us to add on some new ones

  // we will be using find() to search for a specific expense in the array
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id;
    }),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (data) => dispatch(removeExpense(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
