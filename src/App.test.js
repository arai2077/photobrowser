import React from "react";
import { mount } from "enzyme";
import App from "./App";

describe("App", () => {
  it("renders", () => {
    const component = mount(<App />);

    expect(component).toMatchSnapshot();
  });
});
