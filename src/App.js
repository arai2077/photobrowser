import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Title from "./components/Title/Title";
import Gallery from "./components/Gallery/Gallery";
import Photo from "./components/Gallery/Photo/Photo";

const App = () => {
  return (
    <>
      <Title />

      <Router>
        <Switch>
          <Route exact path="/" component={Gallery} />
          <Route path="/:id" component={Photo} />
        </Switch>
      </Router>
    </>
  );
};

export default App;