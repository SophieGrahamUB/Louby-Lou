import About from "@/components/About/About";
import Card from "@/components/Card/Card";
import Companies from "@/components/Companies/Companies";
import Navigation from "@/components/Navigation/Navigation";
import Socials from "@/components/Socials/Socials";
import DividerTitle from "@/components/typography/DividerTitle/DividerTitle";
import Head from "next/head";
import Script from "next/script";
import React from "react";

const about = () => {
  return (
    <>
      <Head>
        <title>Louby Lou - Children's entertainer - About</title>
        <meta
          name="description"
          content="Get to know Louby Lou: Manchester, Lancashire, Cheshire and Merseyside's premium children's entertainer and clown for hire. Embark on a journey to get to know the amazing woman behind the exclusive world of Louby Lou."
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
        <About
          title={"GET TO KNOW LOUBY LOU"}
          body={["Let's take you on a great journey through Louby Lou's past!"]}
          spacer
        />
        <Card
          title={""}
          desc={[
            "From the age of 6 I have been immersed in world of children's entertainment. My dad Arnold aka Trumble The Clown, was touring and gigging across the country, often taking me with him as his helper and apprentice clown.",
            "I knew from the first party I went to with him, this was my calling and what I wanted to do! It wasn't long before the bug turned into a job, and I was accompanying my dad to his parties as Louby Lou and so started my clowning journey. ",
          ]}
          pos={"right"}
          img={"/images/pictures/louby_lou_father.webp"}
          imageAlt={
            "This is an image depicting Louby Lou the Children’s Entertainer during her childhood, another child and her father - all dressed as clowns with heavy colourful makeup and flashy outfits. There is a green parrot in her father's hands."
          }
        />
        <Card
          title={""}
          desc={[
            "I started gigging solo at the age of 18, starting with small parties and events in my local town, but soon grew to bigger performances on grander stages.",
            "However, I've always stayed grounded and love parties of any size, as it doesn't matter to me how big the crowd is, as long as their is magic and laughter.",
          ]}
          pos={"left"}
          img={"/images/pictures/louby_lou_young.webp"}
          imageAlt={
            "This is an image showing Louby Lou the Children’s Entertainer in her clown attire holding a large animal puppet."
          }
        />
        <Card
          title={""}
          desc={[
            "I am very proud of the journey I have taken and so grateful to my dad for his knowledge and support, as well as that of my amazing husband Stu and my gorgeous 3 girls... who knows, maybe one of them will be a third generation clown?",
            "From the birth of Louby Lou to now, I have always put the joy of the audience first, building on my skills, adding new elements to my shows and taking advice, guidance and feedback to continually put on the best entertainment for my audience. ",
          ]}
          pos={"right"}
          img={"/images/pictures/louby_lou_family_2.webp"}
          imageAlt={
            "An image portraying Louby Lou the kids’ party entertainer and her family - her husband, three daughters and family pet dog in the garden at her daughter’s home birthday party. "
          }
        />

        <About
          title={"WHY CHOOSE LOUBY LOU?"}
          body={[
            "As well as experience and heritage, each show is personalised and tailored to your needs.",
            "Whether you want magic and music or silly stuff, Louby Lou offers the best in live entertainment for any party.",
          ]}
          button
          buttonType={"services"}
        />
        <DividerTitle
          title={"Want to keep in the loop?"}
          text={[
            "Scroll down to find my socials, or check the bottom of the page for my personal contact details!",
          ]}
          spacing={"large"}
        />
        <Socials />
        <Companies />
      </main>
    </>
  );
};

export default about;
