import React from "react";
import Shop from "../components/Shop/Shop";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";
import Contact from "../components/Contact/Contact";
import Scroller from "../components/Scroller/Scroller";
import Partners from "../components/Partners/Partners";
import Head from "next/head";

const shop = () => {
  return (
    <div>
      <Head>
        <title>Louby Lou - Shop 💜</title>
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
      <Navbar title={"Shop"} altText={"Buy some giggles!"} button={true}></Navbar>
      <Scroller />
      <Hero src="/videos/Pink_n_purple_video.mp4" type="mp4" />
      <Shop />
      <Partners />
      <Contact />
    </div>
  );
};

export default shop;
