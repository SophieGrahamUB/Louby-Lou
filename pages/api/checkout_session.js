const stripe = require("stripe")(`${process.env.REACT_APP_STRIPE_SECRET}`);

export default async function handler(req, res) {
  if (req.method === "POST") {
    let reqData = JSON.stringify(req.body.data);
    let fixData = reqData.replace(/\\/g, "");
    let moreFixData = fixData.substring(1).slice(0, -1);
    let parseData = JSON.parse(moreFixData);
    let mapDesc = parseData.map((item) => item.name).join(", ");

    try {
      const session = await stripe.checkout.sessions.create({
        billing_address_collection: "auto",
        payment_intent_data: {
          description: `${mapDesc}`,
        },
        shipping_address_collection: {
          allowed_countries: ["GB"],
        },
        payment_method_types: ["card"],
        line_items: parseData,
        mode: "payment",
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
