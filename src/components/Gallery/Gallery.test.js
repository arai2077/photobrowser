import React from "react";
import { mount } from "enzyme";
import Gallery from "./Gallery";

describe("Gallery", () => {
  it("renders", () => {
    const component = mount(<Gallery />);

    expect(component).toMatchSnapshot();
  });
});
