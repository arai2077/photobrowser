import React from "react";
import { mount } from "enzyme";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Photo from "./Photo";

describe("Photo", () => {
  it("renders", () => {
    const component = mount(
      <Router>
        <Route path="Some route">
          <Photo />
        </Route>
      </Router>
    );

    expect(component).toMatchSnapshot();
  });
});
