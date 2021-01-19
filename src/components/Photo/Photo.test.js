import React from "react";
import { shallow } from "enzyme";
import Photo from "./Photo";

describe("Photo", () => {
  it("renders", () => {
    const component = shallow(<Photo />);

    expect(component).toMatchSnapshot();
  });
});
