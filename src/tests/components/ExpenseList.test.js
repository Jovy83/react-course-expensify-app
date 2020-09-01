import { shallow } from "enzyme";
import React from "react";
import { ExpenseList } from "../../components/ExpenseList";
import expenses from "../fixtures/expenses"; // we'll use the test expenses data instead of the store

test("should render ExpenseList with expenses", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseList with empty message", () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
