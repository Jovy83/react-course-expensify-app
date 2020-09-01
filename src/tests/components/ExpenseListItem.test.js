import { shallow } from "enzyme";
import React from "react";
import ExpenseListItem from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses"; // we'll use the test expenses data instead of the store

test("should render ExpenseListItem correctly", () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
