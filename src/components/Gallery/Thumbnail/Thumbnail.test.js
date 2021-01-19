import React from "react";
import { shallow } from "enzyme";
import Thumbnail from "./Thumbnail";

describe("Thumbnail", () => {
  it("renders", () => {
    const component = shallow(<Thumbnail />);

    expect(component).toMatchSnapshot();
  });
});
