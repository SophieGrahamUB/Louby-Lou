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

// {
//   "id": 3,
//   "attributes": {
//     "Name": "Patricroft",
//     "Date": "03/05/2023",
//     "Adult": 0,
//     "Child": 8.5,
//     "length": 3,
//     "Location": "M30 7AW",
//     "time": "18:30:00.000",
//     "eventImageURL": "/images/events/patricroft-03-05-23.jpg",
//     "eventDescription": "Come & join us for our Fun For All Party, open to all ages at @patricroftconsclub! The disco will be held on Wednesday 3rd May, and we'll be celebrating for 3 hours from 6:30pm🥳  Feel free to come & go as you please throughout the night, you and your children don't want to miss out on the dancing, magic & giggles 🤩 There might even be a few prizes to be won too👀  Tickets are £8.50 per child and if you buy 3 tickets, you get 1 free, so make sure to bring all your friends!"
//   }
// },
