import events from "./events.json";
import links from "./links.json";
import pageData from "./pageData.json";

export default async function dataHandler(req, res) {
  if (req.method === "POST") {
    switch (req.body) {
      case "event":
        res.status(200).json(events);
        break;
      case "links":
        res.status(200).json(links);
        break;
      case "pageData":
        res.status(200).json(pageData);
    }
  }
}
