import React from "react";
import { getAvailableCards } from "../lib/cards";
import {
  Cards,
  Card,
  CardName,
  CardDetails,
  CardFact,
  CardData,
  CardLabel,
} from "../styles/styles";

export const AvailableCards = ({
  userQualificationDetails,
  history,
  setSelectedCard,
}) => {
  const cards = getAvailableCards(userQualificationDetails);
  const totalCredit = cards.reduce(
    (accumulator, current) => accumulator + current.creditAvailable,
    0
  );
  const selectCardAndNext = card => {
    setSelectedCard(card);
    history.push("/selected-card");
  };

  return (
    <Cards>
      <Card>
        <CardName>Your Results</CardName>
        <CardFact>
          <CardLabel>Cards Available : </CardLabel>
          <CardData>{cards.length}</CardData>
        </CardFact>
        <CardFact>
          <CardLabel>Credit Available : </CardLabel>
          <CardData>{totalCredit}</CardData>
        </CardFact>
        <button onClick={() => history.push("/")}>
          Go Back // Search Again
        </button>
      </Card>
      {cards.map(card => (
        <Card key={card.name}>
          <CardName>{card.name}</CardName>
          <CardDetails>{card.details}</CardDetails>
          <CardFact>
            <CardLabel>APR : </CardLabel>
            <CardData>{card.apr}</CardData>
          </CardFact>
          <CardFact>
            <CardLabel>Credit Available :</CardLabel>{" "}
            <CardData>{card.creditAvailable}</CardData>
          </CardFact>
          <CardFact>
            <CardLabel>Balance Transfer Offer (months) :</CardLabel>{" "}
            <CardData>{card.balanceTransferOfferMonths}</CardData>
          </CardFact>
          <CardFact>
            <CardLabel>Purchase Offer Duration (months) : </CardLabel>
            <CardData>{card.purchaseOfferMonths}</CardData>
          </CardFact>
          <button onClick={() => selectCardAndNext(card)}>
            Select This Card{" "}
          </button>
        </Card>
      ))}
    </Cards>
  );
};
