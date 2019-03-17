import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { QualificationForm } from "./QualificationForm";
import { AvailableCards } from "./AvailableCards";
import { Wrapper, Content, Header } from "./styles/styles";

const App = () => {
  const [userQualificationDetails, setUserQualificationDetails] = useState({});
  return (
    <Wrapper>
      <Content>
        <Header>ULTIMATE CREDIT CARD FINDER</Header>
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
      </Content>
    </Wrapper>
  );
};

export default App;
