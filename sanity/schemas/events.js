export default {
  name: "events",
  type: "document",
  title: "Events",
  fields: [
    {
      name: "event__Name",
      type: "string",
      title: "Event Name",
    },
    {
      name: "date",
      type: "string",
      title: "Date - Example: (09/08/23 - 12:00 PM)",
    },
    {
      name: "price",
      type: "array",
      title:
        "Prices (Add child, change the price, THEN add adult and change the price, do not use £ symbol. Example: 12)",
      of: [
        { type: "number", name: "child", title: "Child Price" },
        { type: "number", name: "adult", title: "Adult Price" },
      ],
    },
    {
      name: "length",
      type: "number",
      title: "Show Length in hours",
    },
    {
      name: "postCode",
      type: "string",
      title: "Full address of Venue",
    },
    {
      name: "description",
      type: "string",
      title: "Event Description",
    },
    { name: "imgURL", type: "image", title: "Upload event image" },
  ],
};
