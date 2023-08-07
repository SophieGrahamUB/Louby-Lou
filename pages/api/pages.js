import home from "./json/home.json";

export default function handler(req, res) {
  if (req.method === "POST") {
    switch (req.body) {
      case "events":
        res.status(200).json(sanityData);
        break;
    }
  }
}
