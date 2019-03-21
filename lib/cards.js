"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// const people = appData.testPeople;

// const person = people.ollie;

var getAvailableCards = exports.getAvailableCards = function getAvailableCards(person) {
  var appData = require("./appData.js");
  var creditCards = appData.standardCards;

  // checks each item of card criteria against customer details
  // if any fail customer is declined (false)
  var criteriaReducer = function criteriaReducer(person) {
    return function (accumulator, currentValue) {
      if (accumulator === false) {
        return false;
      }
      if (currentValue.type === "matches") {
        return person[currentValue.name] === currentValue.value ? true : false;
      } else if (currentValue.type === "atLeast") {
        return person[currentValue.name] >= currentValue.value ? true : false;
      }
      // else if (currentValue.type < "lessThan") {
      //   return person[currentValue.name] !== currentValue.value ? true : false;
      // }
    };
  };

  // receives a card and sends each piece of criteria to criteriaReducer
  // default (ie. no criteria) = true
  var isCardAvailable = function isCardAvailable(card, person) {
    return card.criteria.reduce(criteriaReducer(person), true);
  };

  // receives a card and checks if it is available to customer
  // if it is the card is added to an array
  var whichCardsAvailableReducer = function whichCardsAvailableReducer(person) {
    return function (accumulator, card) {
      if (isCardAvailable(card, person)) {
        accumulator.push(card);
        return accumulator;
      }
      return accumulator;
    };
  };

  // maps through array of credit cards to check a customer's eligibiity returning an array of cards
  // they should be accepted for
  var availableCards = function availableCards(person) {
    return creditCards.reduce(whichCardsAvailableReducer(person), []);
  };

  var cards = availableCards(person);
  return cards;
};

var confirmSelection = exports.confirmSelection = function confirmSelection(userQualificationDetails, selectedCard, userPersonalDetails) {
  var availableCards = getAvailableCards(userQualificationDetails);
  if (availableCards.some(function (card) {
    return card.name === selectedCard.name;
  })) {
    // Do stuff to sign the customer up to card
    return {
      status: "Verified",
      card: selectedCard,
      person: userPersonalDetails
    };
  } else {
    return {
      status: "Declined",
      card: selectedCard,
      person: userPersonalDetails
    };
  }
};