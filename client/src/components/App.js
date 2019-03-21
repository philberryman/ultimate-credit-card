import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { checkApplicationOnServer } from "../lib/fetch";
import posed, { PoseGroup } from "react-pose";

import { QualificationForm } from "./QualificationForm";
import { AvailableCards } from "./AvailableCards";
import { SelectedCard } from "./SelectedCard";
import { Decision } from "./Decision";

import { Wrapper, Content, Header } from "../styles/styles";

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 },
});

export const App = () => {
  const [selectedCard, setSelectedCard] = useState({});
  const [userQualificationDetails, setUserQualificationDetails] = useState({});
  const [decision, setDecision] = useState();

  const checkIfAccepted = userPersonalDetails => {
    checkApplicationOnServer(
      selectedCard,
      userQualificationDetails,
      userPersonalDetails
    ).then(response => setDecision(response));
  };

  return (
    <Router>
      <Wrapper>
        <Content>
          <Header>ULTIMATE CREDIT CARD FINDER</Header>
          <Route
            render={({ location }) => (
              <PoseGroup>
                <RouteContainer key={location.pathname}>
                  <Switch location={location}>
                    <Route
                      path="/select-card"
                      render={props => (
                        <AvailableCards
                          {...props}
                          userQualificationDetails={userQualificationDetails}
                          setSelectedCard={setSelectedCard}
                          key="select-card"
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
                          key="selected-card"
                        />
                      )}
                    />
                    <Route
                      path="/decision"
                      render={props => (
                        <Decision
                          {...props}
                          decision={decision}
                          key="decision"
                        />
                      )}
                    />
                    <Route
                      path="/"
                      render={props => (
                        <QualificationForm
                          {...props}
                          setUserQualificationDetails={
                            setUserQualificationDetails
                          }
                          key="home"
                        />
                      )}
                    />
                  </Switch>
                </RouteContainer>
              </PoseGroup>
            )}
          />
        </Content>
      </Wrapper>
    </Router>
  );
};
