import React from "react";
import { Route } from "react-router-dom";

const Welcome = (props) => {
  return (
    <section>
      <h1>Welcome</h1>
      <Route path="/welcome/new-user">
        <p>Welcome, new User</p>
      </Route>
    </section>
  );
};

export default Welcome;
