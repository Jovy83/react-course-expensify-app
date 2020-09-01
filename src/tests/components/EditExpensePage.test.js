import { shallow } from "enzyme";
import React from "react";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses"; // we'll use the test expenses data instead of the store

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn(); // spy
  removeExpense = jest.fn(); // spy
  history = { push: jest.fn() }; // object with spy property
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      expense={expenses[2]}
    />
  );
});

test("should render EditExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle editExpense", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test("should handle removeExpense", () => {
  wrapper.find("button").simulate("click");
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(removeExpense).toHaveBeenLastCalledWith({
    id: expenses[2].id,
  });
});
