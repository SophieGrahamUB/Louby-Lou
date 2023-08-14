import Card from "@/components/Card/Card";
import Companies from "@/components/Companies/Companies";
import Decoration from "@/components/Decoration/Decoration";
import Navigation from "@/components/Navigation/Navigation";
import Socials from "@/components/Socials/Socials";
import Head from "next/head";
import React, { useEffect } from "react";
import Script from "next/script";
import About from "@/components/About/About";
import homeData from "./api/json/home.json";

const services = () => {
  const locations = homeData.head.locations;

  function isInt(n) {
    if (Number.isInteger(n) === true) {
      return "left";
    } else {
      return "right";
    }
  }

  return (
    <>
      <Head>
        <title>
          Louby Lou - Top Children's Entertainer Services in North West UK{" "}
        </title>
        <meta
          name="description"
          content={`What can Manchester, Lancashire, Cheshire and Merseyside's premium children's entertainer and clown for hire do for you? ${locations.map(
            (item) => `${item.county}, `
          )}no matter the occasion, Louby Lou can party with you!`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon2.ico" />
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-8ELL72CD8T"
      ></Script>
      <Script>{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-8ELL72CD8T');`}</Script>
      <main>
        <Navigation />
        <About
          title={"Premier Children's Entertainer Services in North West UK"}
          body={[
            "Explore Louby Lou's expert children's entertainer services in Greater Manchester, Lancashire, Merseyside, and Cheshire.",
            "Book laughter, magic, and joy for your events!",
          ]}
          spacer
        />
        <Decoration position={"right"} />
        {locations.map((item, idx) => (
          <Card
            title={item.county}
            desc={[
              `${item.desc[0]} ${item.towns.map((item) => item).join(", ")}?`,
              item.desc[1],
            ]}
            pos={isInt(idx / 2)}
            img={item.image}
            button
            buttonType={"county__link"}
            linkLocation={item.county}
            key={idx}
            imageAlt={item.desc}
          />
        ))}
        <Socials />
        <Companies />
      </main>
    </>
  );
};

export default services;
