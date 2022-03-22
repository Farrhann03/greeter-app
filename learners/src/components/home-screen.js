import { useState } from "react";
import Welcome from "./welcome.js";
import Intro from "./intro.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Apple from "../../src/assets/images/apples.jpeg";
import Orange from "../../src/assets/images/oranges.jpeg";

function HomeScreen() {
  //Given the state a default value.
  const [firstName, setFirstName] = useState(null);

  //Expects an argument called "value", that contains first name.
  //Update the state called "firstName" using setFirstName function.
  const handleChangeFirstName = (value) => {
    setFirstName(value);
  };

  return (
    <>
      {firstName ? (
        <Welcome fName={firstName} />
      ) : (
        <Intro handleChange={handleChangeFirstName} />
      )}

      <br />

      <Router>
        <Link to="/apple">Apple</Link> | <Link to="/orange">Orange</Link> |{" "}
        <Link to="/">None</Link>
        <br />
        <Switch>
          <Route path="/apple">
            <div>Apple</div>
            <img src={Apple} />
          </Route>
          <Route path="/orange">
            <div>Orange</div>
            <img src={Orange} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default HomeScreen;
