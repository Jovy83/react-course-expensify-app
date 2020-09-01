import { shallow } from "enzyme";
import React from "react";
import Header from "../../components/Header";

test("should render Header Correctly,", () => {
  const wrapper = shallow(<Header />);
  // expect(wrapper.find('h1').length).toBe(1); // since we only have 1 h1 element in Header
  //   expect(wrapper.find("h1").text()).toBe("Expensify"); // text() to get the text value of an element

  // snapshot
  expect(wrapper).toMatchSnapshot();
});
