import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { QualificationForm } from "./QualificationForm";
import { AvailableCards } from "./AvailableCards";

const App = () => {
  const [userQualificationDetails, setUserQualificationDetails] = useState({});

  console.log(setUserQualificationDetails);
  return (
    <Router>
      <Switch>
        <Route
          path="/select-card"
          render={props => (
            <AvailableCards
              {...props}
              userQualificationDetails={userQualificationDetails}
            />
          )}
        />
        <Route
          path="/"
          render={props => (
            <QualificationForm
              {...props}
              setUserQualificationDetails={setUserQualificationDetails}
            />
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
