import Card from "@/components/Card/Card";
import Companies from "@/components/Companies/Companies";
import Decoration from "@/components/Decoration/Decoration";
import Navigation from "@/components/Navigation/Navigation";
import Socials from "@/components/Socials/Socials";
import DividerTitle from "@/components/typography/DividerTitle/DividerTitle";
import Head from "next/head";
import React, { useEffect } from "react";
import Script from "next/script";
import Link from "next/link";
import location from "./api/json/locations.json";
import Locations from "@/components/Locations/Locations";

const services = () => {
  function isInt(n) {
    if (Number.isInteger(n) === true) {
      return "left";
    } else {
      return "right";
    }
  }
  let array = [
    {
      name: "Parties",
      desc: [
        "Let's make the birthday child's special day one to remember! Louby Lou's mission is to make the birthday child the star of the show, helping Louby Lou throughout the performance, whether it's magic, singing or games! With a choice of a 1 hour show or a 2 hour show, a gift is guaranteed!",
      ],
      image: "/images/pictures/services_parties_2.webp",
      imageAlt:
        "This is an image showing Louby Lou the female clown performing an interactive clown performance complete with comedy and magic for kids at a fun party event. She is dancing for the children in her clown attire.",
    },
    {
      name: "Giggles on Wheels",
      desc: [
        "Looking for something a little more bitesized? Do big parties not tickle your fancy? How about some Giggles on Wheels?",
        " 20 minutes of pure fun and giggles on your doorstep! Each visit being as unique as your little one! No matter the occasion, let's have some fun!",
      ],
      image: "/images/pictures/services_giggles_on_wheels.webp",
      imageAlt:
        "An image of Louby Lou’s transport van with a decal reading “Giggles on wheels; Louby Lou - North West #1 Children’s Entertainer - Garden gigs, giggles on wheels and any events”.",
    },
    {
      name: "Weddings & Christenings",
      desc: [
        "For a little one, keeping entertained can be a difficult task, especially at large family events! Louby Lou makes that uphill challenge a waterslide of fun and excitement, alleviating the pressure of parenting for the big day!",
      ],
      image: "/images/pictures/services_wedding_christening2.webp",
      imageAlt:
        "An image portraying Louby Lou the Children’s Birthday Party Clown at an exclusive event dressed in her clown outfit delivering a performance on the saxophone to children and adults.",
    },
    {
      name: "Hospitals & Additional Needs",
      desc: [
        "Qualifying as a 'Clown Doctor' in 1999, Louby Lou has extensive knowledge and expertise in dealing with those who require a gentler touch! Working with charities such as 'Medequip4kids' and 'Royal Manchester Children's Hospital'.",
      ],
      image: "/images/pictures/services_special_needs.webp",
      imageAlt:
        "This is an image of Louby Lou at a hospital smiling for a photo with a child patient in her clown attire.",
    },
    {
      name: "Schools",
      desc: [
        "School is such a big part of a little one's life, from Preschool to High school! Why not make this experience magical with Louby Lou! With age adaptable shows, the magic will always flow!",
      ],
      image: "/images/pictures/services_schools.webp",
      imageAlt:
        "An image depicting Louby Lou the Children’s Entertainer at a show in her clown outfit giving a joyful saxophone performance atop a stage.",
    },
    {
      name: "Corporate",
      desc: [
        "From the big stage in The Trafford Centre to the small office gatherings, Louby Lou can do it all. Working for large organisations such as McVities & Kelloggs, Louby Lou has gathered quite an impressive repertoire for any corporate occasion.",
      ],
      image: "/images/pictures/services_corporate.webp",
      imageAlt:
        "This is an image of Louby Lou the female clown atop a large stage giving an exclusive performance for a crowd of children who are raising their hands in the air.",
    },
  ];
  return (
    <>
      <Head>
        <title>Louby Lou - Children's Entertainer - Sevices</title>
        <meta
          name="description"
          content={`What can Manchester, Lancashire, Cheshire and Merseyside's premium children's entertainer and clown for hire do for you? ${array.map(
            (item) => `${item.name}, `
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
        <Locations location={location} />
        <DividerTitle
          title={"What can Louby Lou do for you?"}
          text={["There's always a little something for everyone!"]}
          spacing={"large"}
        />
        <Decoration position={"right"} />
        {array.map((item, idx) => (
          <Card
            title={item.name}
            desc={item.desc}
            pos={isInt(idx / 2)}
            img={item.image}
            button
            buttonType={"enquire"}
            key={idx}
            imageAlt={item.imageAlt}
          />
        ))}
        <Socials />
        <Companies />
      </main>
    </>
  );
};

export default services;
