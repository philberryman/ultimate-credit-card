// const people = appData.testPeople;

// const person = people.ollie;

export const getAvailableCards = person => {
  let appData = require("./appData.js");
  const creditCards = appData.standardCards;

  // checks each item of card criteria against customer details
  // if any fail customer is declined (false)
  const criteriaReducer = person => (accumulator, currentValue) => {
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

  // receives a card and sends each piece of criteria to criteriaReducer
  // default (ie. no criteria) = true
  const isCardAvailable = (card, person) =>
    card.criteria.reduce(criteriaReducer(person), true);

  // receives a card and checks if it is available to customer
  // if it is the card is added to an array
  const whichCardsAvailableReducer = person => (accumulator, card) => {
    if (isCardAvailable(card, person)) {
      accumulator.push(card);
      return accumulator;
    }
    return accumulator;
  };

  // maps through array of credit cards to check a customer's eligibiity returning an array of cards
  // they should be accepted for
  const availableCards = person =>
    creditCards.reduce(whichCardsAvailableReducer(person), []);

  const cards = availableCards(person);
  return cards;
};

export const confirmSelection = (
  userQualificationDetails,
  selectedCard,
  userPersonalDetails
) => {
  const availableCards = getAvailableCards(userQualificationDetails);
  if (availableCards.some(card => card.name === selectedCard.name)) {
    // Do stuff to sign the customer up to card
    return {
      status: "Verified",
      card: selectedCard,
      person: userPersonalDetails,
    };
  } else {
    return {
      status: "Declined",
      card: selectedCard,
      person: userPersonalDetails,
    };
  }
};
