"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var standardCards = exports.standardCards = [{
  name: "Student Life Card",
  apr: 18.9,
  balanceTransferOfferMonths: 0,
  purchaseOfferMonths: 6,
  creditAvailable: 1200,
  criteria: [{ name: "employmentStatus", value: "student", type: "matches" }]
}, {
  name: "Anywhere card",
  apr: 33.9,
  balanceTransferOfferMonths: 0,
  purchaseOfferMonths: 0,
  creditAvailable: 300,
  criteria: []
}, {
  name: "Liquid card",
  apr: 33.9,
  balanceTransferOfferMonths: 12,
  purchaseOfferMonths: 6,
  creditAvailable: 3000,
  criteria: [{ name: "annualIncome", value: 16000, type: "atLeast" }]
}];

var testPeople = exports.testPeople = {
  ollie: {
    title: "Mr",
    firstName: "Ollie",
    lastName: "Murphree",
    dateOfBirth: "01/07/1979",
    annualIncome: 34000,
    employmentStatus: "Full Time Employment",
    houseNumber: "700",
    postCode: "BS14 9PR"
  },
  elizabeth: {
    title: "Miss",
    firstName: "Elizabeth",
    lastName: "Edmundson",
    dateOfBirth: "29/06/1984",
    annualIncome: 17000,
    employmentStatus: "student",
    houseNumber: "117",
    postCode: "PH12 8UW"
  },
  trevor: {
    title: "Mr",
    firstName: "Trevor",
    lastName: "Rieck",
    dateOfBirth: "07/09/1990",
    annualIncome: 15000,
    employmentStatus: "Part Time Employment",
    houseNumber: "343",
    postCode: "TS25 2NF"
  }
};