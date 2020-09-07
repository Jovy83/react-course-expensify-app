import { shallow } from "enzyme";
import React from "react";
import { AddExpensePage } from "../../components/AddExpensePage";
import expenses from "../fixtures/expenses"; // we'll use the test expenses data instead of the store

let startAddExpense, history, wrapper;

beforeEach(() => {
  startAddExpense = jest.fn(); // spy
  history = { push: jest.fn() }; // object with spy property
  wrapper = shallow(
    <AddExpensePage startAddExpense={startAddExpense} history={history} />
  );
});

test("should render AddExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);

  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
});
