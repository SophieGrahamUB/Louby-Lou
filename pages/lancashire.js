import React from "react";
import Hero from "@/components/Hero/Hero";
import Navigation from "@/components/Navigation/Navigation";
import About from "@/components/About/About";
import DividerTitle from "@/components/typography/DividerTitle/DividerTitle";
import Decoration from "@/components/Decoration/Decoration";
import Card from "@/components/Card/Card";
import Socials from "@/components/Socials/Socials";
import homeData from "./api/json/home.json";
import Companies from "@/components/Companies/Companies";
import Reviews from "@/components/Reviews/Reviews";
import { NextSeo } from "next-seo";

export async function getServerSideProps() {
  const pageData = await homeData;
  return {
    props: {
      pageData,
    },
  };
}

export default function Home({ pageData }) {
  let content = pageData.main;
  let head = pageData.head;
  let locationIndex = 1;

  const areaServed = [
    {
      "@type": "GeoShape",
      "@polygon": head.locations[locationIndex].coordinates,
    },
    head.locations[locationIndex].towns.map((item, idx) => ({
      "@type": "Town",
      name: item,
    })),
  ];

  const businessAddress = {
    "@type": "PostalAddress",
    streetAddress: "19 Sandy Lane",
    addressLocality: "Astley",
    postalCode: "M29 7ED",
    addressCountry: "United Kingdom",
  };

  return (
    <>
      <NextSeo
        title={`${head.title} ${head.locations[locationIndex].county}`}
        description={`${head.metadata.content[0]} ${head.locations[locationIndex].county}. ${head.metadata.content[1]}`}
        openGraph={{
          title: `${head.title} ${head.locations[locationIndex].county}`,
          description: `${head.metadata.content[0]} ${head.locations[locationIndex].county}. ${head.metadata.content[1]}`,
          type: "website",
          site_name: `${head.title} ${head.locations[locationIndex].county}`,
        }}
        additionalMetaTags={[
          {
            name: "areaServed",
            content: JSON.stringify(areaServed),
          },
          {
            name: "business:contact_data",
            content: JSON.stringify(businessAddress),
          },
        ]}
        favicon={head.favicon}
      />
      <main>
        <Navigation />
        <Hero title={content.hero.title} src={content.hero.video.url} button />
        <About title={content.about.title} body={content.about.body} />
        <Decoration position={content.decoration.top.position} />
        <DividerTitle
          spacing={"large"}
          title={content.dividerTitle.top.title}
          text={content.dividerTitle.top.text}
        />
        {content.cards.map((item, idx) => (
          <Card
            title={item.title}
            desc={item.description}
            pos={item.position}
            img={item.image}
            key={idx}
            button
            buttonType={item.buttonAction}
            imageAlt={`${item.imageAlt}${head.locations[locationIndex].county}`}
          />
        ))}

        <Decoration position={content.decoration.bottom.position} />

        <Reviews data={content.reviews} />
        <Socials />
        <Companies />
      </main>
    </>
  );
}
