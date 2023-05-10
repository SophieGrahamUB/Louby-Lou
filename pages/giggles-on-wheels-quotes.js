import React from "react";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar";
import Scroller from "../components/Scroller/Scroller";
import QuoteGen from "../components/QuoteGen";
import Contact from "../components/Contact";

const gigglesOnWheelsQuotes = () => {
  return (
    <div>
      {" "}
      <div>
        <Head>
          <title>Louby Lou - Quote Generator 💜</title>
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
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Navbar
          title={"Quotes"}
          altText={"Get your quote today!"}
          button={true}
        ></Navbar>
        <Scroller />
        <Hero
          src="/videos/giggles_on_wheels_fix_mp4.mp4"
          type="mp4"
          poster="/images/posters/giggles_on_wheels_fix_poster.png"
        />
        <QuoteGen />
        <Contact />
      </div>
    </div>
  );
};

export default gigglesOnWheelsQuotes;
