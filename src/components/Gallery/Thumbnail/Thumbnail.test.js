import React from "react";
import { mount } from "enzyme";
import Thumbnail from "./Thumbnail";

describe("Thumbnail", () => {
  it("renders", () => {
    const component = mount(<Thumbnail />);

    expect(component).toMatchSnapshot();
  });
});
