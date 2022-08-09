import React from "react";
import Shop from "../components/Shop/Shop";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";
import Contact from "../components/Contact/Contact";
import Scroller from "../components/Scroller/Scroller";
import Partners from "../components/Partners/Partners";

const shop = () => {
  return (
    <div>
      <Navbar title={"Shop"} altText={"Buy some giggles!"} button={true}></Navbar>
      <Scroller />
      <Hero />
      <Shop />
      <Partners />
      <Contact />
    </div>
  );
};

export default shop;
