/* eslint-disable */
/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// require("dotenv").config();

// eslint-disable-next-line func-call-spacing
const stripe = require("stripe")(
  "sk_test_51KQHkfA9rjBfSM7eXLfYPyrpBXfVWVAVICkQ3ztt8gC46bYW7bNQspT8iJemrMNhcYJQIYarurYouXIGvAmgPmSY00Py4daHUV"
);

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (req, res) => {
  res.status(200).send("Hello!");
});


app.post("/payments/create",async (req, res) => {
  const total = req.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listener
exports.api = functions.https.onRequest(app);

//Exemple endpoint
// http://localhost:5001/challenge-edb35/us-central1/api
