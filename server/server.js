//require("dotenv").config();

const stripe = require("stripe")(
  "sk_test_51JtYZ9L87H3qnVTAnM2zyIp9AlDvppEKWKN1FOh4AT5j73Y07JhB25phfmI8x8QF0kxpFcunNEqyMQ3K07wlInRz00sZjKN1dQ"
);
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const YOUR_DOMAIN = "http://localhost:5000";

const storeItems = new Map([
  [1, { priceInCents: 12500, name: "fall limited edition sneakers" }],
]);

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        const storeItem = storeItems.get(item.id);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${YOUR_DOMAIN}/success`,
      cancel_url: `${YOUR_DOMAIN}/cancel`,
    });
    res.json({ url: session.url });
    res.redirect(303, session.url);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
  res.json({ url: "hi" });
});

app.listen(5000, () => console.log("Running on port 3000"));
