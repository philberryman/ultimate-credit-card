let appData = require("./appData");

const people = appData.testPeople;
const creditCards = appData.standardCards;

const person = people.ollie;

// checks each item of card criteria against customer details
// if any fail customer is declined (false)
const criteriaReducer = (accumulator, currentValue) => {
  console.log(person[currentValue.name]);
  console.log(currentValue.value);
  if (accumulator === false) {
    return false;
  }
  if (currentValue.type === "matches") {
    return person[currentValue.name] === currentValue.value ? true : false;
  } else if (currentValue.type === "atLeast") {
    return person[currentValue.name] >= currentValue.value ? true : false;
  } else if (currentValue.type < "lessThan") {
    return person[currentValue.name] !== currentValue.value ? true : false;
  }
};

// receives a card and sends each piece of criteria to criteriaReducer
// default (ie. no criteria) = true
const isCardAvailable = card => card.criteria.reduce(criteriaReducer, true);

// receives a card and checks if it is available to customer
// if it is the card is added to an array
const whichCardsAvailableReducer = (accumulator, card) => {
  if (isCardAvailable(card)) {
    accumulator.push(card);
    return accumulator;
  }
  return accumulator;
};

// maps through array of credit cards to check a customer's eligibiity returning an array of cards
// they should be accepted for
const availableCards = creditCards.reduce(whichCardsAvailableReducer, []);
const totalCredit = availableCards.reduce(
  (accumulator, current) => accumulator + current.creditAvailable,
  0
);

console.log(availableCards);
console.log(totalCredit);
