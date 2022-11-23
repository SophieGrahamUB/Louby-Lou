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
import Reviews from "../components/Reviews";

export default function Home() {
  const [aboutMeAPI, setAboutMeAPI] = useState([]);

  const fetchData = () => {
    const data = aboutJSON;
    setAboutMeAPI([...aboutMeAPI, data]);
  };

  const fetchLatLong = async () => {
    await fetch("https://api.postcodes.io/postcodes/M460SJ", {
      method: "GET",
      headers: { "Content-Type": "application/json", origin: "*" },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(
          "Latitude:",
          res.result.latitude,
          "Longitude",
          res.result.longitude,
          "of postocde:",
          res.result.postcode
        );
      });
  };

  const tomTomRoute = async () => {
    await fetch(
      "https://api.tomtom.com/routing/1/calculateRoute/53.494316,-2.461848:53.523484,-2.506179/json?routeType=fastest&traffic=true&travelMode=car&vehicleEngineType=combustion&key=nhM8DjfmR7GNhhW0xaLdwePPLTsfzKiW",
      {
        method: "GET",
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(
          "Distance between postcodes:",
          res.routes[0].summary.lengthInMeters,
          "Meters"
        );
      });
  };

  useEffect(() => {
    fetchData();
    fetchLatLong();
    tomTomRoute();
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
      <Hero src="/videos/Pink_n_purple_video.mp4" type="mp4" />
      <Card
        title={aboutMeAPI[0]?.data.attributes.LeaveBlank}
        desc={aboutMeAPI[0]?.data.attributes.aboutMeDetails}
        src={`${aboutMeAPI[0]?.data.attributes.aboutImageURL}`}
        left={true}
      />
      <Services />
      <Partners />
      <Reviews />
      <Contact />
    </div>
  );
}
