import React from "react";
import { shallow } from "enzyme";
import Gallery from "./Gallery";

describe("Gallery", () => {
  it("renders", () => {
    const component = shallow(<Gallery />);

    expect(component).toMatchSnapshot();
  });
});
