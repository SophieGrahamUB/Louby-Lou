import Companies from "@/components/Companies/Companies";
import Gallery from "@/components/Gallery/Gallery";
import Navigation from "@/components/Navigation/Navigation";
import Socials from "@/components/Socials/Socials";
import DividerTitle from "@/components/typography/DividerTitle/DividerTitle";
import Head from "next/head";
import React from "react";
import Script from "next/script";

const gallery = () => {
  return (
    <>
      <Head>
        <title>Louby Lou - Children's Entertainer - Gallery</title>
        <meta
          name="description"
          content="Want a deeper dive into Manchester, Lancashire, Cheshire and Merseyside's premium children's entertainer and clown for hire? Take a look at Louby Lou's instagram images!"
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
        <DividerTitle
          title={"welcome to louby lou's gallery"}
          text={["For all things louby lou"]}
          spacing={"large"}
        />
        <Gallery />
        <Socials />
        <Companies />
      </main>
    </>
  );
};

export default gallery;
