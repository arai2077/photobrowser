import React from "react";
import { mount } from "enzyme";
import Title from "./Title";

describe("Title", () => {
  it("renders", () => {
    const component = mount(<Title />);

    expect(component).toMatchSnapshot();
  });
});
