require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static("public"));

const stripe = require("stripe")(process.env.PRIVATE_KEY);

const storeItems = new Map([
  [1, { priceInCents: 125000, name: "fall limited edition sneakers" }],
]);

app.listen(3000);
