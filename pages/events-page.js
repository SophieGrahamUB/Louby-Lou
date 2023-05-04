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
import Head from "next/head";

const EventsPage = () => {
  const [eventsAPI, setEventsAPI] = useState([]);

  const data = eventsJSON;

  useEffect(() => {
    setEventsAPI([...eventsAPI, data]);
  }, []);

  const isOdd = (num) => {
    return num % 2;
  };

  return (
    <div>
      <Head>
        <title>Louby Lou - Events 💜</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Louby Lou's very own wonderful website! Find events, merch, services and enquire for your own Louby Lou show!"
        />
        <meta
          name="keywords"
          content="Clown, Manchester, Louby, Lou, Louby Lou, Entertainer, North West, Manchester, Greater Manchester"
        />
        <meta name="author" content="Zorilla" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar
        title={"Events"}
        altText={"Let's book some Giggles"}
        button={false}
      ></Navbar>
      <Scroller />
      <Hero src="/videos/trafford_centre_corp_mp4.mp4" type="mp4" />
      <Title title={"Upcoming Events:"} />
      {eventsAPI && eventsAPI[0]?.data.length > 0 ? (
        eventsAPI &&
        eventsAPI[0]?.data.map((item, idx) => (
          <Card
            key={item.attributes.Name}
            title={item.attributes.Name}
            desc={`${item.attributes.eventDescription}`}
            left={isOdd(idx) ? false : true}
            src={`${item.attributes.eventImageURL}`}
          />
        ))
      ) : (
        <Title
          title={
            "Loading events... (Your connection may be slow! Please allow around 30 seconds!)"
          }
        />
      )}
      {eventsAPI[0]?.data.length > 0 ? (
        <>
          <Title title={"Book your events:"} />
          <Events />
        </>
      ) : null}

      <Partners />
      <Contact />
    </div>
  );
};

export default EventsPage;
