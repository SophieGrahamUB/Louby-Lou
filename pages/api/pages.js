import home from "./json/home.json";

export default function handler(req, res) {
  if (req.method === "POST") {
    switch (req.body) {
      case "home":
        res.status(200).json(home);
        break;
    }
  }
}
