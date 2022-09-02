import Navbar from "../components/Navbar";
import Card from "../components/Card/Card";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services";
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
      </Head>
      <Navbar
        button={true}
        title={"Louby Lou"}
        altText={"Making smiles for miles since 1995"}
      />
      <Scroller />
      <Hero src="/videos/Pink_n_purple_video.mp4" type="mp4" />
      <Card
        title={aboutMeAPI[0]?.data.attributes.LeaveBlank}
        desc={aboutMeAPI[0]?.data.attributes.aboutMeDetails}
        src={`${aboutMeAPI[0]?.data.attributes.aboutImageURL}`}
        left={true}
      />
      <Services />
      <Partners />
      <Contact />
    </div>
  );
}
