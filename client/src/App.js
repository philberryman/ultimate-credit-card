import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { QualificationForm } from "./QualificationForm";
import { AvailableCards } from "./AvailableCards";
import { SelectedCard } from "./SelectedCard";
import { checkApplicationOnServer } from "./lib/fetch";

import { Wrapper, Content, Header } from "./styles/styles";

const App = () => {
  const [selectedCard, setSelectedCard] = useState({});
  const [userQualificationDetails, setUserQualificationDetails] = useState({});

  const checkIfAccepted = userPersonalDetails => {
    checkApplicationOnServer(
      selectedCard,
      userQualificationDetails,
      userPersonalDetails
    );
  };

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
                  setSelectedCard={setSelectedCard}
                />
              )}
            />
            <Route
              path="/selected-card"
              render={props => (
                <SelectedCard
                  {...props}
                  card={selectedCard}
                  checkIfAccepted={checkIfAccepted}
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
