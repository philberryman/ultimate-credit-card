const fs = require("fs");

const appData = require("./lib/appData.js");
const cards = require("./lib/cards.js");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3003;

app.post("/check-application", (req, res) => {
  const {
    userQualificationDetails,
    userPersonalDetails,
    selectedCard,
  } = req.body;

  res.send(
    cards.confirmSelection(
      userQualificationDetails,
      selectedCard,
      userPersonalDetails
    )
  );
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
