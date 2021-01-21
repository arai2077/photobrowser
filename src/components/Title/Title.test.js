import React from "react";
import { shallow } from "enzyme";
import Title from "./Title";

describe("Title", () => {
  it("renders", () => {
    const component = shallow(<Title />);

    expect(component).toMatchSnapshot();
  });
});
