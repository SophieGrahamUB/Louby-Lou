import React from "react";
import Shop from "../components/Shop/Shop";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";
import Contact from "../components/Contact/Contact";
import Scroller from "../components/Scroller/Scroller";
import Partners from "../components/Partners/Partners";
import Head from "next/head";
import links from "./api/links.json";

export const getStaticProps = async () => {
  return {
    props: { links },
  };
};

const shop = ({ links }) => {
  return (
    <div>
      <Head>
        <title>Louby Lou - Shop 💜</title>
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
        title={"Shop"}
        altText={"Buy some giggles!"}
        button={true}
        links={links}
      ></Navbar>
      <Scroller />
      <Hero
        id={"Hero"}
        src={"/videos/Pink_n_purple_video.mp4"}
        type="mp4"
        poster="/images/posters/Pink_n_purple_poster.jpg"
      />
      <Shop />
      <Partners />
      <Contact />
    </div>
  );
};

export default shop;
