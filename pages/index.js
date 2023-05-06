import Navbar from "../components/Navbar";
import Card from "../components/Card/Card";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Scroller from "../components/Scroller/Scroller";
import React, { useEffect, useState } from "react";
import aboutJSON from "./api/about.json";
import Partners from "../components/Partners/Partners";
import Head from "next/head";

export default function Home() {
  const [aboutMeAPI, setAboutMeAPI] = useState([]);

  const fetchData = () => {
    const data = aboutJSON;
    setAboutMeAPI([...aboutMeAPI, data]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Head>
        <title>Louby Lou - Home 💜</title>
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
        button={true}
        title={"Louby Lou"}
        altText={"Making smiles for miles since 1995"}
      />
      <Scroller />
      {/* <Hero src="/videos/Pink_n_purple_video.mp4" type="mp4" /> */}
      <Card
        title={aboutMeAPI[0]?.data.attributes.LeaveBlank}
        desc={aboutMeAPI[0]?.data.attributes.aboutMeDetails}
        src={`${aboutMeAPI[0]?.data.attributes.aboutImageURL}`}
        left={true}
      />
      {/* <Services /> */}
      <Partners />
      {/* <Reviews /> */}
      <Contact />
    </div>
  );
}
