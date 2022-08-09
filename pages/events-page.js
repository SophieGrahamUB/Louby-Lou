import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";
import Events from "../components/Events/Events";
import Contact from "../components/Contact/Contact";
import Scroller from "../components/Scroller/Scroller";
import Card from "../components/Card/Card";
import eventsJSON from "./api/events.json";
import Title from "../components/Title";
import Partners from "../components/Partners/Partners";

const EventsPage = () => {
  const [eventsAPI, setEventsAPI] = useState([]);

  const fetchData = async () => {
    const data = eventsJSON;
    setEventsAPI([...eventsAPI, data]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const isOdd = (num) => {
    return num % 2;
  };

  return (
    <div>
      <Navbar
        title={"Events"}
        altText={"Let's book some Giggles"}
        button={false}
      ></Navbar>
      <Scroller />
      <Hero />
      <Title title={"Upcoming Events:"} />
      {eventsAPI.length > 0 ? (
        eventsAPI &&
        eventsAPI[0]?.data.map((item, idx) => (
          <Card
            key={item.attributes.Name}
            title={item.attributes.Name}
            desc={`${item.attributes.eventDescription} ${item.attributes.Date} ${item.attributes.Location}`}
            left={isOdd(idx) ? false : true}
            src={`${item.attributes.eventImageURL}`}
          />
        ))
      ) : (
        <Title title={"Aw no there's no up coming events! Check again later!"} />
      )}
      <Title title={"Book your events:"} />
      <Events />
      <Partners />
      <Contact />
    </div>
  );
};

export default EventsPage;
