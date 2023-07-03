import React from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation/Navigation";
import Socials from "@/components/Socials/Socials";
import About from "@/components/About/About";
import Events from "@/components/Events/Events";
import events__Data from "./api/json/eventsList.json";
import Companies from "@/components/Companies/Companies";

export async function getServerSideProps() {
  const eventsData = await events__Data;
  return {
    props: {
      eventsData,
    },
  };
}

export default function events({ eventsData }) {
  return (
    <>
      <Head>
        <title>Louby Lou - Children's Entertainer - Events</title>
        <meta
          name="description"
          content="Looking for exclusive, high-end events by Manchester, Lancashire, Cheshire and Merseyside's premium children's entertainer and clown for hire? Look no further."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon2.ico" />
      </Head>
      <main>
        <Navigation />
        <About
          title={"What is a Louby Lou Event?"}
          body={[
            "Step into a world of wonder and laughter with Louby Lou, the incredible female clown from Manchester. Her extraordinary events are the epitome of excitement, bringing the giggle of a lifetime to both children and adults. From dancing to infectious beats and meeting the lovable Roger the Rabbit, to the soulful melodies of Louby Lou's saxophone, every moment is crafted for unforgettable memories.",
            "These ticketed gatherings at set locations offer a sensory feast where guests receive special gifts and embark on a musical journey to Ibiza. Don't miss out on Louby Lou's magical events that transcend the ordinary, delivering pure joy and cherished memories in a captivating atmosphere. Secure your ticket today and be prepared for a laughter-filled celebration like no other!",
            "Scroll down and book a magical event with Louby Lou for an unforgettable experience filled with laughter and joy!",
          ]}
          spacer
        />
        {eventsData.events.map((item, idx) => (
          <Events key={idx} position={Number.isInteger(idx / 2)} data={item} />
        ))}

        <Socials />
        <Companies />
      </main>
    </>
  );
}
