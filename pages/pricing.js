import Navigation from "@/components/Navigation/Navigation";
import Socials from "@/components/Socials/Socials";
import DividerTitle from "@/components/typography/DividerTitle/DividerTitle";
import Head from "next/head";
import React from "react";
import pricingJSON from "./api/json/packages.json";
import PricingContainer from "@/components/PricingContainer/PricingContainer";
import About from "@/components/About/About";
import Companies from "@/components/Companies/Companies";

export async function getStaticProps() {
  const pricingData = await pricingJSON;
  return {
    props: {
      pricingData,
    },
  };
}

const pricing = ({ pricingData }) => {
  return (
    <>
      <Head>
        <title>Louby Lou - Children's Entertainer - Pricing</title>
        <meta
          name="description"
          content="Interested in Manchester, Lancashire, Cheshire and Merseyside's premium children's entertainer and clown for hire's exclusive parties? Check out her pricing options! "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation />
        <About
          title={"Looking to book?"}
          body={[
            "Look no further!",
            "Have a look at my packages! Can't find what you're looking for? Feel free to get in touch!",
          ]}
        />
        <PricingContainer data={pricingData} />
        <DividerTitle
          title={"ready for giggles? enquire now!"}
          text={[""]}
          button={true}
          buttonType={"enquire"}
          spacing={"large"}
        />

        <Socials />
        <Companies />
      </main>
    </>
  );
};

export default pricing;
