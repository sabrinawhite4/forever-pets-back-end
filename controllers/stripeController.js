const express = require("express");
const cors = require("cors");
const app = express();
const stripe = require("stripe")(
  "sk_test_51JSC1uDiRelgrqNhZlQY4ipGlJoXurlGHBqr2Zrqu4gOtuv9inisQXsRhsKPg0ikZqPY0ImDl1WwACpYfVb29qLm00Rhmu93TN"
);

app.use(
  cors({ origin: ["http://localhost:4000", "http://checkout.stripe.com"] })
);

module.exports = {
  createSession: async function (req, res) {
    const { cartArray } = req.body;
    const session = await stripe.checkout.sessions.create({
      line_items: [...cartArray],
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `http://localhost:3000/merch-success`,
      cancel_url: `http://localhost:3000/merch-cancel`,
    });
    res.json({ url: session.url });
  },
};
