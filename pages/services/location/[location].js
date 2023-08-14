import locations from "../../api/json/counties.json";
import Card from "@/components/Card/Card";
import Companies from "@/components/Companies/Companies";
import Decoration from "@/components/Decoration/Decoration";
import Navigation from "@/components/Navigation/Navigation";
import Socials from "@/components/Socials/Socials";
import DividerTitle from "@/components/typography/DividerTitle/DividerTitle";
import Head from "next/head";
import React from "react";
import homeData from "../../api/json/home.json";

/* Does what is says on the tin, gets static paths, this will be the slug
that it gets from the dataset in the locations.json file */
export async function getStaticPaths() {
  const paths = await locations;
  return {
    paths,
    fallback: false,
  };
}

/* This basically gets the data from the static path above (Notice params), 
then returns that data as a prop to be used in the page's export component*/
export async function getStaticProps({ params }) {
  const location = await params.location;
  const pageData = await homeData;
  return {
    props: {
      location,
      pageData,
    },
  };
}

const location = ({ location, pageData }) => {
  /* 
  Function to check if a number is odd or even. 
  It takes in a calculation and checks if the return is an integer or not 
  (as an odd number returns a float) 
  It then returns a left or right string to be used in a switch case 
  */
  function isInt(n) {
    if (Number.isInteger(n) === true) {
      return "left";
    } else {
      return "right";
    }
  }

  let towns = pageData.head.locations.filter(
    (item) => item.county === location
  )[0].towns;

  return (
    <>
      <Head>
        <title>Louby Lou - Best Children's Entertainer in {location}</title>
        <meta
          name="description"
          content={`What can ${location}'s premium children's entertainer and clown for hire do for you? ${towns.map(
            (item) => `${item.name}, `
          )}no matter the occasion, Louby Lou can party with you!`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon2.ico" />
      </Head>
      <main>
        <Navigation />
        <DividerTitle
          title={`Premier Children's Entertainer Services in ${location}`}
          text={[
            `Explore Louby Lou's expert children's entertainer services in ${location}, UK. Discover towns like ${towns
              .map((item) => `${item}`)
              .join(", ")}.`,
            `Book unforgettable entertainment now!`,
          ]}
          spacing={"large"}
        />
        <Decoration position={"right"} />
        {towns.map((item, idx) => (
          <Card
            title={item}
            desc={[`What can Louby Lou do for you in ${item}?`]}
            pos={isInt(idx / 2)}
            img={`/images/locations/${item}.webp`}
            button
            buttonType={"town__link"}
            linkLocation={item}
            key={idx}
            imageAlt={item}
          />
        ))}
        <Socials />
        <Companies />
      </main>
    </>
  );
};

export default location;
