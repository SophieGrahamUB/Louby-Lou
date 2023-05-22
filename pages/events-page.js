import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Events from "../components/Events/Events";
import Contact from "../components/Contact/Contact";
import Scroller from "../components/Scroller/Scroller";
import Card from "../components/Card/Card";
import events from "./api/events.json";
import Title from "../components/Title";
import Partners from "../components/Partners/Partners";
import Head from "next/head";
import links from "./api/links.json";
import Placeholder from "../components/Placeholder";
import dynamic from "next/dynamic";

const DynamicHero = dynamic(() => import("../components/Hero/Hero"), {
  loading: () => (
    <Placeholder src={"/images/posters/trafford_centre_corp_poster.jpg"} />
  ),
});

export const getStaticProps = async () => {
  return {
    props: {
      eventsJSON: events,
      links: links,
    },
  };
};

const EventsPage = ({ eventsJSON, links }) => {
  const [eventsAPI, setEventsAPI] = useState([]);

  useEffect(() => {
    setEventsAPI([...eventsAPI, eventsJSON]);
  }, []);

  const isOdd = (num) => {
    return num % 2;
  };

  return (
    <div>
      <Head>
        <title>Louby Lou - Events 💜</title>
        <meta charSet="UTF-8" />
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
        links={links}
      ></Navbar>
      <Scroller />{" "}
      <DynamicHero
        src="/videos/trafford_centre_corp_mp4.mp4"
        type="mp4"
        poster="/images/posters/trafford_centre_corp_poster.jpg"
      />
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
